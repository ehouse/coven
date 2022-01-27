import { useEffect, useState } from 'react';
import Head from "next/head";
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth, API } from 'aws-amplify';

import { listNotebooks, ListNotebooksQuery } from "../graphql";
import Layout from '../components/layout';

import type { NextPage, GetServerSideProps } from 'next';
import '@aws-amplify/ui-react/styles.css';

// Setup and import the auth config
import config from '../aws-exports';
Amplify.configure({
    ...config,
    ssr: true
});

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//     const SSR = withSSRContext({ req });
//     const response = await SSR.API.graphql({ query: queries.listNotes });

//     return {
//         props: {
//             notes: response.data.listNotes.items,
//         },
//     };
// };

// async function handleCreatePost(event: React.ChangeEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const { target } = event;

//     const form = new FormData(target);

//     try {
//         const results = await API.graphql({
//             authMode: "AMAZON_COGNITO_USER_POOLS",
//             query: mutations.createNote,
//             variables: {
//                 input: {
//                     title: form.get("title"),
//                     content: form.get("content"),
//                 },
//             },
//         });
//         console.log(results);

//         window.location.href = `/notes/${results.data.createNote.id}`;
//     } catch (err) {
//         console.log(err);
//     }
// }

interface Props {
}

const Home: NextPage<Props> = () => {
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
        <Layout notebookNames={notebooks}>
            <p>This is the home page!</p>
        </Layout>

    );
};

export default withAuthenticator(Home);