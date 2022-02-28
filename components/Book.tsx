import '@aws-amplify/ui-react/styles.css';
import React, { useCallback, useContext, useState } from 'react';

import { ActionIcon, AppShell, Skeleton, Button, Box, CloseButton, Divider, Group, Menu, Navbar, ScrollArea, Text, ThemeIcon, Title, UnstyledButton, TextInput } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import { useDrag, useDrop } from 'react-dnd';
import { RiAddCircleLine, RiArrowLeftSLine, RiDraftLine, RiMoreFill } from "react-icons/ri";

import config from 'aws-exports';
import EditorGrid from 'components/EditorGrid';
import { NoteTileContext } from 'context';
import { useCategoryListQuery, useCategoryMutate, useCreateCategory, useDeleteCategory } from 'hooks/Category';
import { useCreateNote, useNoteListQuery, useMoveNoteCategory } from 'hooks/Notes';
import { Category, Note, Notebook } from 'models';


Amplify.configure({ ...config });

function SidebarButton(props: { note: Note; }) {
    const { id, title } = props.note;

    const moveNoteCategory = useMoveNoteCategory(id);
    const { toggleVisible, visibleSet } = useContext(NoteTileContext);
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'SIDEBAR_BUTTON',
        item: { noteID: id },
        end: (collected, monitor) => {
            const dropResult = monitor.getDropResult<{ newTagID: string; }>();
            if (collected.noteID && dropResult) {
                moveNoteCategory(dropResult.newTagID);
            }
        },
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    return (<div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <UnstyledButton key={id} onClick={() => toggleVisible(id)}>
            <Group>
                <ThemeIcon variant={visibleSet.has(id) ? 'filled' : 'light'}>
                    <RiDraftLine />
                </ThemeIcon>
                <div role="Handle" ref={drag}>
                    <Text>
                        {title ?? 'Note'}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    </div>);
}

function SidebarCategory(props: { category: Category, notes: Note[]; }) {
    const { id } = props.category;

    const categoryMutate = useCategoryMutate(id);
    const deleteTag = useDeleteCategory(id);

    const [isEdit, setEdit] = useState(false);
    const [title, setTitle] = useState(props.category.title);
    const clickAwayRef = useClickOutside(() => {
        setEdit(false);
        categoryMutate(title);
    });

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'SIDEBAR_BUTTON',
        // Props to collect
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        drop: (item, monitor) => (
            { newTagID: id }
        )
    }));

    return (
        <div ref={drop} style={{ width: '100%' }}>
            <Box
                onClick={(event: React.MouseEvent<HTMLElement>) => { if (event.detail >= 2) setEdit(true); }}
                sx={(theme) => ({
                    cursor: 'pointer',
                    borderBottom: '1px solid',
                })}
            >
                <Group position='apart' style={{ flexWrap: 'nowrap' }}>
                    <Box m='xs'>
                        {isEdit
                            ? <TextInput
                                ref={clickAwayRef}
                                value={title}
                                variant="unstyled"
                                sx={(theme) => ({
                                    input: {
                                        fontSize: '20px'
                                    }
                                })}
                                onChange={(event) => setTitle(event.currentTarget.value)}
                            />
                            : <Text size='xl'>{title}</Text>
                        }
                    </Box>
                    <CloseButton title="Delete Category" size='sm' onClick={() => deleteTag()} />
                </Group>
            </Box>
            <Group direction='column' spacing='xs' my='sm'>
                {props.notes.map((note) =>
                    <Box key={note.id} ml='xs' >
                        <SidebarButton note={note} />
                    </Box>
                )}
                {isOver && <Skeleton mx='sm' height={20} radius="md" />}
            </Group>

        </div>
    );
}

function Book(props: { notebook: Notebook; }) {
    const notebookID = props.notebook.id;
    const [visibleSet, setVisibleSet] = useState(new Set<string>());
    const router = useRouter();

    // Server state modification callbacks
    const createNote = useCreateNote();
    const createCategory = useCreateCategory();

    // Dependent on notebookQuery returning {status: 'success'}
    // Collects all of the dependent notes for a notebook.id
    const noteListQuery = useNoteListQuery(notebookID);

    // Dependent on notebookQuery returning {status: 'success'}
    // Collects all of the dependent notes for a notebook.id
    const categoryListQuery = useCategoryListQuery(notebookID);

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

    const contextState = { visibleSet: visibleSet, toggleVisible: toggleVisible };

    return (
        <NoteTileContext.Provider value={contextState}>
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
                                    {props.notebook.title ?? 'Loading...'}
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
                        <Group direction='column' spacing={0}>
                            {noteListQuery.data?.map((note) => {
                                if (note.categoryID === null || !categoryListQuery.data?.find((element) => element.id === note.categoryID)) {
                                    return <SidebarButton key={note.id} note={note} />;
                                }
                            })}
                            {categoryListQuery.data?.map((category) => {
                                const filteredList = noteListQuery.data?.filter((val) => val.categoryID === category.id) ?? [];
                                return <SidebarCategory key={category.id} category={category} notes={filteredList} />;
                            })}
                        </Group>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Divider />
                        <Group mt='sm' direction='row'>
                            <Button
                                style={{ flexGrow: 1 }}
                                loading={noteListQuery.isLoading}
                                leftIcon={<RiAddCircleLine />}
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'red', deg: 35 }}
                                onClick={() => createNote(notebookID)}
                            >
                                New Note
                            </Button>
                            <Menu control={<Button variant='light'><RiMoreFill /></Button>}>
                                <Menu.Item onClick={() => createCategory('category', notebookID)}>New Catagory</Menu.Item>
                            </Menu>
                        </Group>
                    </Navbar.Section>
                </Navbar>
                }
            >
                {noteListQuery.isLoading
                    ? <div>{`Loading...`}</div>
                    : <EditorGrid notes={noteListQuery.data} />
                }
            </AppShell>
        </NoteTileContext.Provider>
    );
};

export default Book;