import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { z } from "zod";
import { ListNotebooksQuery, Notebook } from "../../../API";
import config from '../../../aws-exports';
import MainLayout from '../../../components/MainLayout';
import * as queries from '../../../graphql/queries';
import type { SidebarNotebooks, SidebarReducerAction, SidebarState } from '../../../types';

Amplify.configure({ ...config });

type loadState = 'SUCCESS' | 'NODATA' | 'LOADING' | 'ERROR';

function sidebarReducer(state: SidebarState, action: SidebarReducerAction): SidebarState {
    switch (action.type) {
        case 'addNotebook':
            // Insert new notebook at notebooks property
            return { ...state, notebooks: { ...state.notebooks, [action.payload.id]: action.payload } };
        case 'deleteNotebook':
            // Copy state and delete property
            const stateCopy = state;
            delete stateCopy.notebooks[action.payload];

            if (Object.keys(stateCopy.notebooks).length > 0) {
                return { ...stateCopy, activeID: Object.keys(stateCopy.notebooks)[0] };
            }
            return { ...stateCopy, activeID: '' };
        case 'updateNotebook':
            const generatedState = { ...state, notebooks: { ...state.notebooks, [action.payload.id]: action.payload.notebook } };
            console.log(generatedState);
            return generatedState;
        case 'setNotebooks':
            return { ...state, notebooks: action.payload };
        case 'setActiveID':
            return { ...state, activeID: action.payload };
        default:
            return state;
    }

}

const nidSchema = z.string().uuid();


function Loading() {
    return <p>Loading...</p>;
}

function Content(props: { notebook?: Notebook; }) {
    return <p>{`Expanded Notes page for: ${props.notebook?.id}`}</p>;
}

const initialState = { notebooks: {}, activeID: '' };

function Page() {
    const router = useRouter();
    const [loadState, setLoadState] = useState<loadState>('LOADING');
    const [sidebarState, sidebarDispatch] = useReducer(sidebarReducer, initialState);

    // Async function to handle the destructuring of the graphql query
    const fetchNotebooks = useCallback(() => {
        const query = API.graphql(graphqlOperation(queries.listNotebooks)) as Promise<{ data: ListNotebooksQuery; }>;

        query.then((result) => {
            setLoadState('LOADING');
            // Ugly hack until they fix this
            // https://github.com/aws-amplify/amplify-js/issues/6369
            const results = result.data.listNotebooks?.items as unknown as Notebook[];

            if (results.length === 0) {
                setLoadState('NODATA');
            } else {
                const constructedState: SidebarNotebooks = {};
                results.forEach((item) => {
                    constructedState[item.id] = item;
                });
                sidebarDispatch({ type: 'setNotebooks', payload: constructedState });
            }
        }).catch((e) => {
            console.log("Error when collecting Notebooks", e);
            setLoadState('ERROR');
        });
    }, []);

    useEffect(() => {
        fetchNotebooks();
    }, [fetchNotebooks]);

    useEffect(() => {
        if (router.isReady && typeof router.query.id !== 'undefined') {
            const nbid = nidSchema.parse(router.query.id);

            if (sidebarState.activeID === '' && nbid) {
                sidebarDispatch({ type: 'setActiveID', payload: nbid });
            }
            setLoadState('SUCCESS');
        }
    }, [router.isReady, sidebarState.activeID, router.query.id]);

    return <MainLayout sidebarState={sidebarState} sidebarDispatch={sidebarDispatch}>
        {loadState === 'LOADING' && <Loading />}
        {loadState === 'SUCCESS' && <Content notebook={sidebarState.notebooks[sidebarState.activeID]} />}
        {loadState === 'ERROR' && <p>Error!</p>}
        {loadState === 'NODATA' && <p>Create a notebook to begin`</p>}
    </MainLayout>;
};

export default withAuthenticator(Page);