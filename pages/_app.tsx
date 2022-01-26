import type { AppProps } from 'next/app';

import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import Layout from '../src/components/layout';

// Setup auth code for all pages
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure({
    ...config,
    ssr: true
});


function App(props: AppProps) {
    const { Component, pageProps } = props;

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
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                }}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MantineProvider>
        </>
    );
}

export default App;