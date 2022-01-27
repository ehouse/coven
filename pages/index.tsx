import { useEffect, useState } from 'react';
import Head from "next/head";
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import { listNotebooks, ListNotebooksQuery, Notebook } from "../graphql";
import MainLayout from '../components/layout';

import type { NextPage } from 'next';

import '@aws-amplify/ui-react/styles.css';

// Setup and import the auth config
import config from '../aws-exports';
Amplify.configure({
    ...config
});

interface Props {
}

const Home: NextPage<Props> = (props: Props) => {
    const [notebooks, setNotebooks] = useState<Notebook[]>([]);

    useEffect(() => {
        fetchNotebooks();
    }, []);

    // Async function to handle the destructuring of the graphql query 
    async function fetchNotebooks() {
        const query = API.graphql(graphqlOperation(listNotebooks)) as Promise<{ data: ListNotebooksQuery }>

        query.then((result) => {
            // Ugly hack until they fix this
            // https://github.com/aws-amplify/amplify-js/issues/6369
            const book = result.data.listNotebooks?.items as unknown as Notebook[]
            setNotebooks(book)
        }).catch((e) => {
            console.log("Error when collecting Notebooks", e)
        })
    }

    return (
        <MainLayout notebooks={notebooks}>
            <p>This is the home page!</p>
        </MainLayout>
    );
};

export default withAuthenticator(Home);