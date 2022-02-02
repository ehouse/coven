import '@aws-amplify/ui-react/styles.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import Amplify from 'aws-amplify';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useReducer } from 'react';
import type { Notebook } from '../API';
import config from '../aws-exports';
import { CreateNotebookModal } from '../components/modals';
import { SiteStateContext } from '../context';
import type { SiteReducerAction, SiteReducerState } from '../types';

Amplify.configure({
    ...config
});

function reducer(state: SiteReducerState, action: SiteReducerAction) {
    switch (action.type) {
        case "setNotebooks":
            return { ...state, "notebooks": action.payload };

        case "createNotebook":
            const data = [...state.notebooks, action.payload];
            return { ...state, "notebooks": data };

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

function App(props: AppProps) {
    const [siteState, siteDispatch] = useReducer(reducer, initialState);

    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>SpiderNotes</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="A modern, distraction free, graphing notes taking app" />
                <meta name="keywords" content="Notes, Note Taking, Distraction Free, App" />
                <meta name="author" content="Evelyn House (ehouse@fastmail.com)" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <ModalsProvider modals={{ createNotebookModal: CreateNotebookModal }} >
                    <SiteStateContext.Provider value={{ state: siteState, dispatch: siteDispatch }}>
                        <Component {...pageProps} />
                    </SiteStateContext.Provider>
                </ModalsProvider>
            </MantineProvider>
        </>
    );
}

export default App;