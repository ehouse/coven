import React, { useCallback, useEffect, useReducer, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useRouter } from 'next/router';
import { z } from "zod";

import { ListNotebooksQuery, Notebook } from "API";
import config from 'aws-exports';
import MainLayout from 'components/MainLayout';
import * as queries from 'graphql/queries';
import type { NotebooksData, GraphQLResult, SidebarReducerAction, SidebarState } from 'types';

Amplify.configure({ ...config });

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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();
    const [sidebarState, sidebarDispatch] = useReducer(sidebarReducer, initialState);

    // Async function to handle the destructuring of the graphql query
    const fetchNotebooks = useCallback(async () => {
        setLoading(true);
        try {
            const constructedState: NotebooksData = {};
            const query = API.graphql(graphqlOperation(queries.listNotebooks)) as GraphQLResult<ListNotebooksQuery>;
            const items = (await query).data?.listNotebooks?.items;

            if (typeof items === 'undefined') {
                throw Error(`Malformed response from server. Server Response: ${JSON.stringify(query)}`);
            }

            items.forEach((item) => {
                if (item !== null) {
                    constructedState[item.id] = item;
                }
            });
            sidebarDispatch({ type: 'setNotebooks', payload: constructedState });

        } catch (e: unknown) {
            console.log("Error when collecting Notebooks", e);
            setError(e as Error);
        }
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
            setLoading(false);
        }
    }, [router.isReady, sidebarState.activeID, router.query.id]);

    return <MainLayout sidebarState={sidebarState} sidebarDispatch={sidebarDispatch}>
        {loading && <Loading />}
        {(!error && !loading) && <Content notebook={sidebarState.notebooks[sidebarState.activeID]} />}
        {error && <p>Error!</p>}
    </MainLayout>;
};

export default withAuthenticator(Page);