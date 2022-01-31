import { AppShell, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useCallback, useContext, useEffect, useState } from 'react';
import { IoBookOutline } from "react-icons/io5";
import { ListNotebooksQuery, Notebook } from "../API";
import config from '../aws-exports';
import { SiteStateContext } from '../context';
import * as queries from '../graphql/queries';
import CreateNotebookModal from './createNotebookModal';
interface Props {
    children: React.ReactNode;
}
interface NotebookBadgeProps {
    setActiveNotebook: (arg0: Notebook) => void;
    notebook: Notebook;
    isSelected: boolean;
}

function NotebookBadge(props: NotebookBadgeProps) {
    const theme = useMantineTheme();

    return <div>
        <UnstyledButton onClick={() => props.setActiveNotebook(props.notebook)}>
            <Group>
                <ThemeIcon size={40} radius="md" color={props.isSelected ? "red" : "blue"}>
                    <IoBookOutline />
                </ThemeIcon >
                <div>
                    <Text weight={"500"}>{props.notebook.title}</Text>
                    <Text size="xs" color="gray">{props.notebook.description}</Text>
                </div>
            </Group>
        </UnstyledButton>
    </div>;
}

function MainLayout(props: Props) {
    const [modelVisible, setModelVisible] = useState(false);
    const { state, dispatch } = useContext(SiteStateContext);
    const [notebooks, notebookHandlers] = useListState<Notebook>();

    const theme = useMantineTheme();
    const setActiveNotebook = useCallback((notebook: Notebook) => (dispatch({ type: 'setActiveNotebook', payload: notebook })), [dispatch]);

    // Async function to handle the destructuring of the graphql query
    const fetchNotebooks = useCallback(() => {
        const query = API.graphql(graphqlOperation(queries.listNotebooks)) as Promise<{ data: ListNotebooksQuery; }>;

        query.then((result) => {
            // Ugly hack until they fix this
            // https://github.com/aws-amplify/amplify-js/issues/6369
            const results = result.data.listNotebooks?.items as unknown as Notebook[];
            console.log(results);
            dispatch({ type: 'setNotebooks', payload: results });
        }).catch((e) => {
            console.log("Error when collecting Notebooks", e);
        });
    }, [dispatch]);

    useEffect(() => {
        fetchNotebooks();
    }, [fetchNotebooks, dispatch]);

    return <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
        navbar={
            <Navbar padding={10} width={{ base: 300 }}>
                <Navbar.Section>
                    <Title mb={'sm'} order={3}>🕷️ SpiderNotes</Title>
                    <Divider />
                </Navbar.Section>
                <Navbar.Section
                    grow
                    component={ScrollArea}
                    sx={{ paddingRight: 10 }}
                >
                    <Group mt={'sm'} spacing={'xs'}>
                        {state.notebooks.map((n) => (
                            <div key={n.title}
                                style={{
                                    backgroundColor: theme.colors.gray[0],
                                    boxShadow: theme.shadows['xs'],
                                    padding: '.2rem',
                                    width: '100%'
                                }}>
                                <NotebookBadge
                                    notebook={n}
                                    isSelected={state.activeNotebook?.id === n.id}
                                    setActiveNotebook={setActiveNotebook}
                                />
                            </div>
                        ))}
                    </Group>
                </Navbar.Section>
                <Navbar.Section>
                    <Divider />
                    <Button mt={'sm'}
                        fullWidth
                        disabled={state.notebooks.length >= 25}
                        onClick={() => setModelVisible(true)}
                    >
                        Create Notebook
                    </Button>
                </Navbar.Section>
            </ Navbar>
        }
    >
        <CreateNotebookModal handler={notebookHandlers} opened={modelVisible} setOpened={setModelVisible} />
        {props.children}
    </AppShell>;
}

export default MainLayout;