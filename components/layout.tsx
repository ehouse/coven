import { AppShell, Burger, Button, Group, Header, MediaQuery, Navbar, Space, Text, ThemeIcon, Title, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import Amplify, { API, Cache, graphqlOperation } from 'aws-amplify';
import type { Dispatch } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { IoBookOutline, IoLogoGithub } from "react-icons/io5";
import { ListNotebooksQuery, Notebook } from "../API";
import config from '../aws-exports';
import * as queries from '../graphql/queries';
import type { SiteReducerAction, SiteReducerState } from '../types';
import CreateNotebookModel from './createNotebookModal';

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
    const theme = useMantineTheme();
    return <UnstyledButton onClick={() => props.siteDispatch({ type: 'setActiveNotebook', payload: props.notebook })}>
        <Group>
            <ThemeIcon size={40} radius="md" color={props.isSelected ? "red" : "blue"}>
                <IoBookOutline />
            </ThemeIcon >
            <div>
                <Text weight={"500"}>{props.notebook.title}</Text>
                <Text size="xs" color="gray">{props.notebook.description}</Text>
            </div>
        </Group>
    </UnstyledButton>;
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
        navbar={
            <Navbar
                padding="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                width={{ sm: 200, lg: 300 }}
            >
                <Navbar.Section grow>
                    <Title order={3}>Notebooks</Title>
                    <Space h="md" />
                    <Group direction="column" spacing="xs">
                        {notebooks.map((n) => (
                            <div key={n.title}
                                style={{
                                    backgroundColor: theme.colors.gray[0],
                                    boxShadow: theme.shadows['xs'],
                                    padding: '.2rem 0',
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
                    <Button fullWidth
                        onClick={() => setModelVisible(true)}
                    >
                        Create Notebook
                    </Button>
                </Navbar.Section>
            </Navbar>
        }
        header={
            <Header height={70} padding="md">
                {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>
                    <Title>SpiderNotes</Title>
                    <div style={{ width: '100%' }}>
                        <Group position="right" >
                            <Button
                                color="dark"
                                component="a"
                                href="https://github.com/ehouse/coven"
                                target="_blank"
                                variant="outline"
                                leftIcon={<IoLogoGithub size={'1.8em'} />}
                            >
                                Source Code
                            </Button>
                        </Group>
                    </div>
                </div>
            </Header>
        }
    >
        <CreateNotebookModel handler={notebookHandlers} opened={modelVisible} setOpened={setModelVisible} />
        {props.children}
    </AppShell>;
}

export default MainLayout;