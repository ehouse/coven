import '@aws-amplify/ui-react/styles.css';
import React, { useCallback, useEffect, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { AppShell } from '@mantine/core';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import { z } from "zod";

import { Note } from "API";
import config from 'aws-exports';
import EditorGrid from 'components/EditorGrid';
import EditorSidebar from 'components/EditorSidebar';
import { useCreateNote, useStatefulNotes, useFetchNotebook, useUserInfo, useDeleteNote } from 'hooks';

Amplify.configure({ ...config });

const nidSchema = z.string().uuid();

function Page() {
    const router = useRouter();
    const [notebookID, setNotebookID] = useState<string>();
    const [error, setError] = useState<Error>();

    const userInfo = useUserInfo();

    // Callback to generate a note when triggered by the UI.
    const createNote = useCreateNote(setError);

    const deleteNote = useDeleteNote(setError);

    // Safely parse the nextjs dynamic route key
    // Sets notebookID when successfully parsed
    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            const parsedSchema = nidSchema.safeParse(id);
            if (parsedSchema.success) {
                setNotebookID(parsedSchema.data);
            } else {
                setError(parsedSchema.error);
            }
        }
    }, [router.isReady, router.query]);

    // Dependent on router.query parsed ID value
    // Collect up notebook information
    const notebookQuery = useFetchNotebook(notebookID);

    // Dependent on notebookQuery returning {status: 'success'}
    // Collects all of the dependent notes for a notebook.id
    const notesListQuery = useStatefulNotes(notebookQuery.data?.id);

    if (error) {
        console.log(error);
    }

    const loadingAggregate = (notebookQuery.isLoading && notesListQuery.isLoading);

    return (
        <AppShell
            navbar={<EditorSidebar
                loading={loadingAggregate}
                noteList={notesListQuery.data}
                notebook={notebookQuery.data}
                createNote={createNote}
                deleteNote={deleteNote}
            />}
        >
            <EditorGrid />
        </AppShell>
    );
};

export default withAuthenticator(Page);