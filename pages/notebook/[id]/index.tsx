import React, { useCallback, useEffect, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ActionIcon, AppShell, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title, UnstyledButton } from '@mantine/core';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import { RiAddCircleLine, RiArrowLeftSLine, RiDraftLine } from "react-icons/ri";
import { z } from "zod";

import config from 'aws-exports';
import EditorGrid from 'components/EditorGrid';
import { NoteTileContext } from 'context';
import { useCreateNote, useNotebookQuery, useNoteListQuery } from 'hooks';
import { Note } from 'models';

Amplify.configure({ ...config });

const nidSchema = z.string().uuid();

function Page() {
    const router = useRouter();
    const [notebookID, setNotebookID] = useState<string>();
    const [visibleSet, setVisibleSet] = useState(new Set<string>());
    const [error, setError] = useState<Error>();

    // Callback to generate a note when triggered by the UI.
    const createNote = useCreateNote();

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
    const notebookQuery = useNotebookQuery(notebookID);

    // Dependent on notebookQuery returning {status: 'success'}
    // Collects all of the dependent notes for a notebook.id
    const noteListQuery = useNoteListQuery(notebookID);

    /**
     * Wrapper around createNote setState function for ease of use
     */
    const createNoteEvent = () => {
        if (notebookQuery.data) {
            createNote(notebookQuery.data.id);
        }
    };

    /**
     * Toggle visibility of a single note by a given note ID.
     * @param id ID of notebook to toggle
     */
    const toggleVisible = useCallback((id: string) => {
        setVisibleSet((oldState) => {
            oldState.has(id) ? oldState.delete(id) : oldState.add(id);
            return new Set(oldState);
        });
    }, []);

    /**
     * Generates a callback that when passed a note generates a clickable sidebar button
     */
    const sidebarButton = useCallback((note: Note) => {
        return (<UnstyledButton onClick={() => toggleVisible(note.id)}>
            <Group>
                <ThemeIcon variant={visibleSet.has(note.id) ? 'filled' : 'light'}>
                    <RiDraftLine />
                </ThemeIcon>
                <div>
                    <Text>
                        {note.title ?? 'Note'}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>);
    }, [visibleSet, toggleVisible]);

    const contextState = { visibleSet: visibleSet, toggleVisible: toggleVisible };

    const loadingAggregate = (notebookQuery.isLoading && noteListQuery.isLoading);

    if (error) {
        console.log(error);
    }

    return (
        <AppShell
            fixed
            padding={0}
            navbar={<Navbar fixed position={{ top: 0, left: 0 }} padding={10} width={{ base: 300 }}>
                <Navbar.Section>
                    <Group direction='column' spacing={0}>
                        <Title mb={'sm'} order={3}>🕷️ SpiderNotes</Title>
                        <Group direction='row' spacing='xs'>
                            <ActionIcon title='Go back' onClick={() => router.push('/notebook')}>
                                <RiArrowLeftSLine />
                            </ActionIcon>
                            <Text color='dimmed' size='md'>
                                {notebookQuery.data?.title ?? 'Loading...'}
                            </Text>
                        </Group>
                    </Group>
                    <Divider mt='md' />
                </Navbar.Section>
                <Navbar.Section
                    grow
                    component={ScrollArea}
                    mt='sm'
                >
                    <Group direction='column'>
                        {noteListQuery.data?.map((note) => sidebarButton(note))}
                    </Group>
                </Navbar.Section>
                <Navbar.Section>
                    <Divider />
                    <Button
                        fullWidth
                        mt='sm'
                        loading={loadingAggregate}
                        leftIcon={<RiAddCircleLine />}
                        variant="gradient"
                        gradient={{ from: 'pink', to: 'red', deg: 35 }}
                        onClick={() => createNoteEvent()}
                    >
                        New Note
                    </Button>
                </Navbar.Section>
            </Navbar>
            }
        >
            {notebookID
                ? <NoteTileContext.Provider value={contextState}>
                    <EditorGrid notes={noteListQuery.data} />
                </NoteTileContext.Provider>
                : loadingAggregate
                    ? <div>{`Loading...`}</div>
                    : <div>{`Error! Notebook doesn't exist`}</div>
            }
        </AppShell>
    );
};

export default withAuthenticator(Page);