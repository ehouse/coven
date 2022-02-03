import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import Amplify from 'aws-amplify';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import config from '../aws-exports';
import { CreateNotebookModal, NotebookSettingsModal } from '../components/Modals';
import '../styles/globals.css';

Amplify.configure({
    ...config
});

function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>SpiderNotes</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The modern distractions free note taking app. Store and connect your notes and ideas as a network of information. Designed to minimize information overload and to give you exactly what you need now." />
                <meta name="keywords" content="Notes, Note Taking, Distraction Free, App" />
                <meta name="author" content="Evelyn House (ehouse@fastmail.com)" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <Authenticator.Provider>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme: 'light',
                    }}
                >
                    <ModalsProvider modals={{
                        createNotebookModal: CreateNotebookModal,
                        notebookSettingsModal: NotebookSettingsModal
                    }} >
                        <Component {...pageProps} />
                    </ModalsProvider>
                </MantineProvider>
            </Authenticator.Provider>
        </>
    );
}

export default App;