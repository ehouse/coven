import React, { useEffect, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { z } from "zod";

import config from 'aws-exports';
import Book from 'components/Book';
import { useNotebookQuery } from 'hooks/Notebooks';


Amplify.configure({ ...config });

const nidSchema = z.string().uuid();

function Page() {
    const router = useRouter();
    const [notebookID, setNotebookID] = useState<string>();
    const [visibleSet, setVisibleSet] = useState(new Set<string>());
    const [error, setError] = useState<Error>();

    // Safely parse the nextjs dynamic route key
    // Sets notebookID when successfully parsed
    useEffect(() => {
        if (router.isReady) {
            const parsedSchema = nidSchema.safeParse(router.query.id);

            if (parsedSchema.success) {
                setNotebookID(parsedSchema.data);
            } else {
                setError(parsedSchema.error);
            }
        }
    }, [router.isReady, router.query]);

    // Dependent on router.query parsed ID value
    // Collect up notebook information
    const notebookQuery = useNotebookQuery(notebookID);

    return (
        <DndProvider backend={HTML5Backend}>
            {notebookQuery.isLoading
                ? <div>Loading...</div>
                : notebookQuery.data
                    ? <Book notebook={notebookQuery.data} />
                    : <div>No NotebookID Provided :(</div>
            }
        </DndProvider>
    );
};

export default withAuthenticator(Page);