import { useEffect, useState } from 'react';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import Layout from '../src/components/layout';
import { API } from 'aws-amplify';
import * as queries from "../src/graphql/queries";

import type { AppProps } from 'next/app';

// Setup auth code for all pages
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure({
    ...config,
    ssr: true
});


function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [notebooks, setNotebooks] = useState<string[]>([]);

    useEffect(() => {
        const query = API.graphql({ query: queries.listNotebooks });
        if (query instanceof Promise) {
            query.then((results) => {
                setNotebooks(results.data.listNotebooks.items.map((notebook) => (notebook.title)));
            });
        }
    }, []);

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