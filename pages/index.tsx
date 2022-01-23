import Head from "next/head";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";

import awsExports from "../src/aws-exports";
import { createNote } from "../src/graphql/mutations";
import { listNotes } from "../src/graphql/queries";

import styles from "../styles/Home.module.css";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
    const SSR = withSSRContext({ req });
    const response = await SSR.API.graphql({ query: listNotes });

    return {
        props: {
            notes: response.data.listNotes.items,
        },
    };
}

async function handleCreatePost(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    try {
        const { data } = await API.graphql({
            authMode: "AMAZON_COGNITO_USER_POOLS",
            query: createNote,
            variables: {
                input: {
                    title: form.get("title"),
                    body: form.get("body"),
                },
            },
        });

        window.location.href = `/notes/${data.createNote.id}`;
    } catch (err) {
        console.log(err);
    }
}

export default function Home({ notes = [] }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Amplify + Next.js</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Amplify + Next.js</h1>

                <p className={styles.description}>
                    <code className={styles.code}>{notes.length}</code>
                    notes
                </p>

                <div className={styles.grid}>
                    {notes.map((note) => (
                        <a className={styles.card} href={`/notes/${note.id}`} key={note.id}>
                            <h3>{note.title}</h3>
                            <p>{note.body}</p>
                        </a>
                    ))}

                    <div className={styles.card}>
                        <h3 className={styles.title}>New Note</h3>

                        <Authenticator>
                            {({ signOut, user }) => (
                                <form onSubmit={handleCreatePost}>
                                    <fieldset>
                                        <legend>Title</legend>
                                        <input
                                            defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
                                            name="title"
                                        />
                                    </fieldset>

                                    <fieldset>
                                        <legend>Content</legend>
                                        <textarea
                                            defaultValue="I built an Amplify app with Next.js!"
                                            name="content"
                                        />
                                    </fieldset>

                                    <button>Create Post</button>
                                    <button type="button" onClick={() => signOut()}>
                                        Sign out
                                    </button>
                                </form>
                            )}
                        </Authenticator>
                    </div>
                </div>
            </main>
        </div>
    );
}