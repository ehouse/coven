import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CreateNotebookModal } from '../components/modals';

function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>SpiderNotes</title>
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
                    <Component {...pageProps} />
                </ModalsProvider>
            </MantineProvider>
        </>
    );
}

export default App;