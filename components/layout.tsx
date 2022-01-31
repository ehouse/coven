import { AppShell, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import Amplify, { API, Cache, graphqlOperation } from 'aws-amplify';
import type { Dispatch } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { IoBookOutline } from "react-icons/io5";
import { ListNotebooksQuery, Notebook } from "../API";
import config from '../aws-exports';
import * as queries from '../graphql/queries';
import type { SiteReducerAction, SiteReducerState } from '../types';
import CreateNotebookModal from './createNotebookModal';


Amplify.configure({
    ...config,
});

interface Props {
    children: React.ReactNode;
    siteState: SiteReducerState;
    siteDispatch: Dispatch<SiteReducerAction>;
}

interface NotebookBadgeProps {
    siteDispatch: Dispatch<SiteReducerAction>;
    notebook: Notebook;
    isSelected: boolean;
}

function NotebookBadge(props: NotebookBadgeProps) {
    const [modelVisible, setModelVisible] = useState(false);

    const theme = useMantineTheme();
    return <div>
        <UnstyledButton onClick={() => props.siteDispatch({ type: 'setActiveNotebook', payload: props.notebook })}>
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
    const [opened, setOpened] = useState(false);
    const [modelVisible, setModelVisible] = useState(false);
    const [notebooks, notebookHandlers] = useListState<Notebook>();

    const theme = useMantineTheme();
    const setNotebookState = notebookHandlers.setState;

    // Async function to handle the destructuring of the graphql query
    const fetchNotebooks = useCallback(() => {
        const query = API.graphql(graphqlOperation(queries.listNotebooks)) as Promise<{ data: ListNotebooksQuery; }>;

        query.then((result) => {
            // Ugly hack until they fix this
            // https://github.com/aws-amplify/amplify-js/issues/6369
            const results = result.data.listNotebooks?.items as unknown as Notebook[];
            setNotebookState(results);
            Cache.setItem(`listNotebooks`, results);
        }).catch((e) => {
            console.log("Error when collecting Notebooks", e);
        });
    }, [setNotebookState]);

    useEffect(() => {
        const cacheHit = Cache.getItem(`listNotebooks`);
        if (cacheHit) {
            setNotebookState(cacheHit);
        } else {
            fetchNotebooks();
        }
    }, [fetchNotebooks, setNotebookState]);

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
                    <Group spacing={'xs'}>
                        {notebooks.map((n) => (
                            <div key={n.title}
                                style={{
                                    backgroundColor: theme.colors.gray[0],
                                    boxShadow: theme.shadows['xs'],
                                    padding: '.2rem',
                                    width: '100%'
                                }}>
                                <NotebookBadge
                                    notebook={n}
                                    isSelected={props.siteState.activeNotebook.id === n.id}
                                    siteDispatch={props.siteDispatch}
                                />
                            </div>
                        ))}
                    </Group>
                </Navbar.Section>
                <Navbar.Section>
                    <Divider />
                    <Button mt={'sm'}
                        fullWidth
                        disabled={notebooks.length >= 25}
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