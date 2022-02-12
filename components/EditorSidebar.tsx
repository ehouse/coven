import React, { useCallback } from 'react';

import { ActionIcon, Affix, Box, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title, useMantineTheme, CloseButton } from '@mantine/core';
import { RiAddCircleLine, RiBook2Fill, RiBookOpenFill } from "react-icons/ri";

import { CreateNoteInput, Notebook, Note, NoteType } from "API";


interface Props {
    noteList?: Note[];
    notebook?: Notebook;
    createNote: (arg0: CreateNoteInput) => void;
    deleteNote: (arg0: string) => void;
    loading: boolean;
}

function EditorSidebar(props: Props) {
    const { noteList, createNote, notebook, loading } = props;

    const create = () => {
        if (notebook) {
            createNote({ title: 'Default', content: "Hello World!", noteType: NoteType.TEXT, notebookID: notebook.id });
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
                        return <Box key={note.id}>
                            <Group direction='column'>
                                <Group style={{ width: '100%' }} direction='row'>
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
                    onClick={() => create()}
                >
                    New Note
                </Button>
            </Navbar.Section>
        </Navbar>
    );
}

export default EditorSidebar;