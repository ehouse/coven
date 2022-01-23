import { withSSRContext } from 'aws-amplify';
import { Note } from '../../src/models';
import Markdown from 'react-markdown';
import { useRouter } from 'next/router';

export default function PostComponent({ note }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Markdown children={note.body} />
        </div>
    );
}

export async function getStaticPaths(req) {
    const { DataStore } = withSSRContext(req);
    const notes = await DataStore.query(Note);
    const paths = notes.map(note => ({ params: { id: note.id } }));
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(req) {
    const { DataStore } = withSSRContext(req);
    const { params } = req;
    const { id } = params;
    const note = await DataStore.query(Note, id);

    return {
        props: {
            note: JSON.parse(JSON.stringify(note))
        },
        revalidate: 1
    };

}