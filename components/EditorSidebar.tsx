import React, { useCallback } from 'react';

import { ActionIcon, Affix, Box, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title, useMantineTheme, CloseButton } from '@mantine/core';
import { RiAddCircleLine, RiBook2Fill, RiBookOpenFill } from "react-icons/ri";

import { Notebook, Note } from 'models';

interface Props {
    noteList?: Note[];
    notebook?: Notebook;
    createNote: (id: string) => void;
    deleteNote: (id: string) => void;
    loading: boolean;
}

function EditorSidebar(props: Props) {
    const { noteList, createNote, notebook, loading } = props;

    const createNoteEvent = () => {
        if (notebook) {
            createNote(notebook.id);
        }
    };

    return (
        <Navbar padding={10} width={{ base: 300 }}>
            <Navbar.Section>
                <Group direction='column' spacing={0}>
                    <Title mb={'sm'} order={3}>🕷️ SpiderNotes</Title>
                    <Text color='dimmed' size='sm'>{notebook?.id ?? 'Loading...'}</Text>
                </Group>
                <Divider mt='md' />
            </Navbar.Section>
            <Navbar.Section
                grow
                component={ScrollArea}
            >
                <Group direction='column'>
                    {typeof noteList !== 'undefined' && noteList.map((note) => {
                        return <Box key={note.id} style={{ width: '100%' }}>
                            <Group direction='column'>
                                <Group position='apart' direction='row' style={{ width: '100%' }}>
                                    <Text>{note.title}</Text>
                                    <CloseButton style={{}} onClick={() => props.deleteNote(note.id)} title='Delete Note' />
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
                    loading={loading}
                    leftIcon={<RiAddCircleLine />}
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'red', deg: 35 }}
                    onClick={() => createNoteEvent()}
                >
                    New Note
                </Button>
            </Navbar.Section>
        </Navbar>
    );
}

export default EditorSidebar;