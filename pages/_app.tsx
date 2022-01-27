import { useEffect, useState } from 'react';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { API } from 'aws-amplify';

import Layout from '../components/layout';
import { listNotebooks, ListNotebooksQuery } from "../graphql";

import type { AppProps } from 'next/app';

// Setup auth code for all pages
import Amplify from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure({
    ...config,
    ssr: true
});


function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [notebooks, setNotebooks] = useState<string[]>([]);

    useEffect(() => {
        fetchNotebooks();
    }, []);

    // Async function to handle the destructuring of the graphql query 
    async function fetchNotebooks() {
        const serverState = (await API.graphql({ query: listNotebooks, authMode: "AMAZON_COGNITO_USER_POOLS" })) as { data: ListNotebooksQuery };
        const results = serverState.data.listNotebooks
        if (results) {
            setNotebooks(results.items.map((notebook) => (notebook?.title ?? '')));
        }
    }

    return (
        <>
            <Head>
                <title>Coven - Notes</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <Layout notebookNames={notebooks}>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </>
    );
}

export default App;