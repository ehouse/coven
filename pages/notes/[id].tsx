import { Amplify, API } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";

import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';


// import styles from "../../styles/Home.module.css";

// interface Props {
//     note: Note;
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//     const SSR = withSSRContext();
//     const { data } = await SSR.API.graphql({ query: queries.listNotes, authMode: "AMAZON_COGNITO_USER_POOLS" });

//     const paths = data.listNotes.items.map((note: Note) => ({
//         params: { id: note.id },
//     }));

//     return {
//         fallback: true,
//         paths,
//     };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const SSR = withSSRContext();

//     if (!params) {
//         throw Error("Missing note ID");
//     }

//     const { data } = await SSR.API.graphql({
//         query: queries.getNote,
//         variables: {
//             id: params.id,
//         },
//     });

//     return {
//         props: {
//             note: data.getNote,
//         },
//     };
// };

// const NotePage: NextPage<Props> = ({ note }) => {
//     const router = useRouter();

//     if (router.isFallback) {
//         return (
//             <div className={styles.container}>
//                 <h1 className={styles.title}>Loading&hellip;</h1>
//             </div>
//         );
//     }

//     async function handleDelete() {
//         try {
//             await API.graphql({
//                 authMode: "AMAZON_COGNITO_USER_POOLS",
//                 query: mutations.deleteNote,
//                 variables: {
//                     input: { id: note.id },
//                 },
//             });

//             window.location.href = "/";
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     return (
//         <div className={styles.container}>
//             <Head>
//                 <title>{note.title} – Amplify + Next.js</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <main className={styles.main}>
//                 <h1 className={styles.title}>{note.title}</h1>

//                 <p className={styles.description}>{note.content}</p>
//             </main>

//             <footer className={styles.footer}>
//                 <button onClick={handleDelete}>💥 Delete note</button>
//             </footer>
//         </div>
//     );
// };
function Page() {
    return <div />;
}
export default Page;