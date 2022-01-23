import { Amplify, API, withSSRContext } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";

import awsExports from "../../src/aws-exports";
import { deleteNote } from "../../src/graphql/mutations";
import { getNote, listNotes } from "../../src/graphql/queries";

import styles from "../../styles/Home.module.css";

Amplify.configure({ ...awsExports, ssr: true });

export async function getStaticPaths() {
    const SSR = withSSRContext();
    const { data } = await SSR.API.graphql({ query: listNotes });
    const paths = data.listNotes.items.map((note) => ({
        params: { id: note.id },
    }));

    return {
        fallback: true,
        paths,
    };
}

export async function getStaticProps({ params }) {
    const SSR = withSSRContext();
    const { data } = await SSR.API.graphql({
        query: getNote,
        variables: {
            id: params.id,
        },
    });

    return {
        props: {
            note: data.getNote,
        },
    };
}

export default function Note({ note }) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Loading&hellip;</h1>
            </div>
        );
    }

    async function handleDelete() {
        try {
            await API.graphql({
                authMode: "AMAZON_COGNITO_USER_POOLS",
                query: deleteNote,
                variables: {
                    input: { id: note.id },
                },
            });

            window.location.href = "/";
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{note.title} – Amplify + Next.js</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>{note.title}</h1>

                <p className={styles.description}>{note.body}</p>
            </main>

            <footer className={styles.footer}>
                <button onClick={handleDelete}>💥 Delete note</button>
            </footer>
        </div>
    );
}