import Head from "next/head";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify, API, withSSRContext } from "aws-amplify";

import * as mutations from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

import type { NextPage, GetServerSideProps } from 'next';
import type { CreateNoteMutation, Notebook } from '../src/API';

import '@aws-amplify/ui-react/styles.css';

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
    Notebook: Notebook[];
}

const Home: NextPage<Props> = ({ Notebook = [] }) => {
    return (<p>This is the home page!</p>);
};

export default withAuthenticator(Home);