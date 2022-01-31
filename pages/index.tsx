import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Affix } from '@mantine/core';
import Amplify from 'aws-amplify';
import type { NextPage } from 'next';
import { useReducer } from 'react';
import type { Notebook } from '../API';
import config from '../aws-exports';
import MainLayout from '../components/layout';
import OptionsMenu from '../components/opionsMenu';
import type { SiteReducerAction, SiteReducerState } from '../types';
import React from 'react';
import { SiteStateContext } from '../context';


Amplify.configure({
    ...config
});

function reducer(state: SiteReducerState, action: SiteReducerAction) {
    switch (action.type) {
        case "setNotebooks":
            return { ...state, "notebooks": action.payload };

        case "addNotebook":
            return { ...state, "notebooks": action.payload };

        case "deleteNotebook":
            const filteredSet = state.notebooks.filter((item) => item.id !== action.payload);
            return { ...state, "activateNotebook": null, "notebooks": filteredSet };

        case "setActiveNotebook":
            return { ...state, "activeNotebook": action.payload };

        default:
            return state;
    }
}

const initialState = {
    notebooks: [] as Notebook[],
    activeNotebook: null
};

const Home: NextPage = () => {
    const [siteState, siteDispatch] = useReducer(reducer, initialState);

    return (
        <SiteStateContext.Provider value={{ state: siteState, dispatch: siteDispatch }}>
            <MainLayout>
                <Affix position={{ 'top': 20, 'right': 20 }}>
                    <OptionsMenu />
                </Affix>
                <p>This is the home page!</p>
            </MainLayout>
        </SiteStateContext.Provider >
    );
};

export default withAuthenticator(Home);