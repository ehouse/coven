import React, { useEffect, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ActionIcon, AppShell, Box, Button, Divider, Group, Navbar, ScrollArea, Text, Title } from '@mantine/core';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import { RiAddCircleLine, RiBookOpenLine, RiDeleteBin6Line, RiDraftLine } from "react-icons/ri";
import { z } from "zod";

import config from 'aws-exports';
import EditorGrid from 'components/EditorGrid';
import { NoteTileContext } from 'context';
import { useCreateNote, useDeleteNote, useNotebookQuery, useNoteListQuery, useUserInfo } from 'hooks';

Amplify.configure({ ...config });

const nidSchema = z.string().uuid();

function Page() {
    const router = useRouter();
    const [notebookID, setNotebookID] = useState<string>();
    const [visibleSet, setVisibleSet] = useState(new Set<string>());
    const [error, setError] = useState<Error>();

    const userInfo = useUserInfo();

    // Callback to generate a note when triggered by the UI.
    const createNote = useCreateNote();
    const deleteNote = useDeleteNote();

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

    if (error) {
        console.log(error);
    }

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
    const toggleVisible = (id: string) => {
        setVisibleSet((oldState) => {
            // Return appended value of value does not exist and cannot be deleted
            const result = oldState.delete(id);
            return result ? new Set(oldState) : new Set(oldState.add(id));
        });
    };

    const contextState = { visibleSet: visibleSet, toggleVisible: toggleVisible };

    const loadingAggregate = (notebookQuery.isLoading && noteListQuery.isLoading);

    return (
        <AppShell
            fixed
            padding={0}
            navbar={<Navbar fixed position={{ top: 0, left: 0 }} padding={10} width={{ base: 300 }}>
                <Navbar.Section>
                    <Group direction='column' spacing={0}>
                        <Title mb={'sm'} order={3}>🕷️ SpiderNotes</Title>
                        <Text color='dimmed' size='md'>
                            <RiBookOpenLine style={{ marginRight: '4px' }} />
                            {notebookQuery.data?.title ?? 'Loading...'}
                        </Text>
                    </Group>
                    <Divider mt='md' />
                </Navbar.Section>
                <Navbar.Section
                    grow
                    component={ScrollArea}
                >
                    <Group direction='column'>
                        {typeof noteListQuery.data !== 'undefined' && noteListQuery.data.map((note) => {
                            return <Box key={note.id} style={{ width: '100%' }}>
                                <Group direction='column'>
                                    <Group position='apart' direction='row' style={{ width: '100%' }}>
                                        <Group spacing='xs' direction='row'>
                                            <ActionIcon onClick={() => toggleVisible(note.id)}>
                                                <RiDraftLine />
                                            </ActionIcon>
                                            <Text>{note.title}</Text>
                                        </Group>
                                        <ActionIcon color='red' onClick={() => deleteNote(note.id)} title='Delete Note' >
                                            <RiDeleteBin6Line />
                                        </ActionIcon>
                                    </Group>
                                    <Text size='sm' color='dimmed'>{note.id}</Text>
                                </Group>
                            </Box>;
                        })}
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