import React, { useCallback, useEffect, useState, useRef, forwardRef } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { ActionIcon, Badge, Center, SimpleGrid, AppShell, Box, Button, Card, Container, Group, MediaQuery, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useModals } from '@mantine/modals';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { useRouter } from 'next/router';
import { RiBook2Fill, RiCheckboxBlankCircleLine, RiCheckLine, RiDeleteBin2Line, RiFileAddLine, RiFileSettingsLine } from "react-icons/ri";
import { useLongPress } from 'use-long-press';

import { ListNotebooksQuery, Notebook } from "API";
import config from 'aws-exports';
import { openDeleteNotebookModal, openSettingsModal } from 'components/Modals';
import NavHeader from 'components/NavHeader';
import * as queries from 'graphql/queries';
import { useUserInfo } from 'hooks';
import { GraphQLResult, NotebooksData } from 'types';

Amplify.configure({ ...config });

interface NotebookBadgeProps {
    notebook: Notebook;
    isSelected: boolean;
    setSelected: (arg0: string) => void;
}

function NotebookBadge(props: NotebookBadgeProps) {
    const { notebook, isSelected, setSelected } = props;

    const router = useRouter();
    const theme = useMantineTheme();
    const { hovered, ref } = useHover();

    const notebookColor = props.notebook.color ? props.notebook.color : theme.colors.blue[5];

    // Bindings and callback for long press. Passed directly to the buttons
    const successCallback = useCallback(() => {
        setSelected(notebook.id);
    }, [notebook, setSelected]);

    const cancelCallback = useCallback(() => {
        router.push(`/notebook/${notebook.id}`);
    }, [router, notebook.id]);

    const bind = useLongPress(successCallback, {
        threshold: 400,
        onCancel: cancelCallback,
    });

    const borderSelect = {
        border: `1px solid ${theme.colors.dark[1]}`,
        backgroundColor: theme.colors.gray[1],
        borderRadious: '5px'
    };

    return <div ref={ref} key={notebook.id} style={{ position: 'relative' }}>
        <Box style={{
            margin: 0,
            position: 'absolute',
            zIndex: 1
        }}>
            {(hovered || isSelected) &&
                <ThemeIcon title='Select Notebook' size='sm' onClick={() => setSelected(notebook.id)} color='dark' radius="sm" >
                    {isSelected ? <RiCheckLine size='1.4em' /> : <RiCheckboxBlankCircleLine size='1.4em' />}
                </ThemeIcon>}
        </Box>
        <Button
            {...bind}
            aria-label={`Open Notebook ${notebook.title}`}
            fullWidth
            variant="subtle"
            styles={(theme) => ({
                root: {
                    height: 'auto',
                    padding: '.4em 10px',
                    '&:hover': {
                        backgroundColor: theme.fn.darken(theme.colors.blue[0], 0.05),
                    },
                    ...(isSelected ? borderSelect : null),
                },
                label: {
                    flexGrow: 2,
                }
            })}
            leftIcon={
                <ThemeIcon sx={{ backgroundColor: notebookColor }} size={60} radius="md">
                    <RiBook2Fill size='45' />
                </ThemeIcon >
            }>
            <Group direction='column' spacing={0}>
                <Text weight="700">{props.notebook.title}</Text>
                <Text size="sm" color="gray">{props.notebook.description}</Text>
                <Group mt='xs' direction='row' spacing={3}>
                    <Badge color='grape'>Lorum</Badge>
                    <Badge color='red'>Ipsum</Badge>
                    <Badge color='blue'>Don Goto</Badge>
                </Group>
            </Group>
        </Button>
    </div>;
}

interface SettingsNotebookProps {
    notebook: Notebook;
    updateNotebook: (id: string, notebook: Notebook) => void;
}

function SettingsNotebook(props: SettingsNotebookProps) {
    const modals = useModals();

    const SettingsModal = useCallback(() => openSettingsModal({
        modals: modals,
        notebook: props.notebook,
        updateNotebook: props.updateNotebook
    }), [modals, props.notebook, props.updateNotebook]);

    return <ActionIcon title="Notebook Settings" size='lg' color="dark" onClick={SettingsModal}>
        <RiFileSettingsLine size='2em' />
    </ActionIcon>;
}

interface TrashNotebookProps {
    notebook: Notebook;
    deleteNotebook: (id: string) => void;
}

function TrashNotebook(props: TrashNotebookProps) {
    const modals = useModals();

    // Create a delete modal to confirm deletion of notebook
    const deleteModal = useCallback(() => openDeleteNotebookModal({
        modals: modals,
        notebook: props.notebook,
        deleteNotebook: props.deleteNotebook
    }), [modals, props.notebook, props.deleteNotebook]);

    return <ActionIcon title="Delete Notebook" size='lg' color="dark" onClick={deleteModal}>
        <RiDeleteBin2Line size='2em' color='red' />
    </ActionIcon>;
}

interface CreateNotebookProps {
    addNotebook: (id: Notebook) => void;
    endArrowRef: React.MutableRefObject<unknown>;
}

function CreateNotebook(props: CreateNotebookProps) {
    const modals = useModals();

    const createNotebookModal = useCallback(() => modals.openContextModal('createNotebookModal', {
        title: 'Create Notebook',
        props: { addNotebook: props.addNotebook, }
    }), [modals, props.addNotebook]);

    return (<ActionIcon ref={props.endArrowRef} title="Create Notebook" size='lg' color="dark" onClick={createNotebookModal}>
        <RiFileAddLine size='2em' />
    </ActionIcon>
    );
}


function EmptyPage(props: { startArrowRef: React.MutableRefObject<unknown>; }) {
    return (
        <Center>
            <Box ref={props.startArrowRef}>
                <Text size='xl' m='xl'>
                    Click to create your first notebook!
                </Text>
            </Box>
        </Center>
    );
}

function Page() {
    const theme = useMantineTheme();

    const [loading, setLoading] = useState(true);
    const [state, setState] = useState<NotebooksData>({});
    const [selected, setSelected] = useState<string>();

    const userInfo = useUserInfo();

    const startArrowRef = useRef<React.MutableRefObject<unknown>>();
    const endArrowRef = useRef<React.MutableRefObject<unknown>>();

    async function createLine() {
        const LeaderLine = (await import('react-leader-line')).default;
        const line = new LeaderLine(startArrowRef.current, endArrowRef.current);
        return line;
    }

    const stateSize = Object.keys(state).length;

    // Effect block to draw the Tutorial Line™️ 
    useEffect(() => {
        // Short circuit tutorial line if notebooks exist
        if (stateSize > 0 || loading) {
            return;
        };

        let line: any;
        const linePromise = createLine();

        linePromise.then((x) => line = x);
        // Make sure to cleanup the old lines since they're manually managed outside of React
        return () => line && line.remove();
    }, [stateSize, loading]);

    const addNotebook = useCallback((notebook) => setState((prevState) => ({ ...prevState, [notebook.id]: notebook })), []);
    const updateNotebook = useCallback((id, notebook) => setState((prevState) => ({ ...prevState, [id]: notebook })), []);
    const deleteNotebook = useCallback((id) => {
        setSelected(undefined);
        setState((prevState) => {
            delete prevState[id];
            return { ...prevState };
        });
    }, []);

    const fetchData = useCallback(async () => {
        const query = API.graphql(graphqlOperation(queries.listNotebooks)) as GraphQLResult<ListNotebooksQuery>;
        return query.then((result) => result.data?.listNotebooks?.items);
    }, []);

    useEffect(() => {
        setLoading(true);
        const dataPromise = fetchData();
        dataPromise.then((data) => {
            const constructedState: NotebooksData = {};

            if (typeof data !== 'undefined') {
                data.forEach((x) => {
                    constructedState[x.id] = x;
                });
                setState(constructedState);
                setLoading(false);
            }
        });
    }, [fetchData]);

    return <AppShell
        header={
            <MediaQuery
                query="(max-width: 400px)"
                styles={{ display: 'none' }}
            >
                <NavHeader hideEditorButton userInfo={userInfo} />
            </MediaQuery>
        }>
        <Container>
            <Card withBorder>
                <Card.Section style={{ padding: '1rem' }} sx={{ boxShadow: theme.shadows.xs, backgroundColor: theme.colors.gray[0] }}>
                    <Group>
                        <Title sx={{ flexGrow: 1 }} order={2}>Notebooks</Title>
                        {selected && <Group direction="row">
                            <TrashNotebook notebook={state[selected]} deleteNotebook={deleteNotebook} />
                            <SettingsNotebook notebook={state[selected]} updateNotebook={updateNotebook} />
                        </Group>}
                        <CreateNotebook endArrowRef={endArrowRef} addNotebook={addNotebook} />
                    </Group>
                </Card.Section>
                {(stateSize > 0 || loading) || <EmptyPage startArrowRef={startArrowRef} />}
                <SimpleGrid mt='md' cols={2}>
                    {Object.keys(state).map((key) => {
                        return <div key={key} style={{ width: '100%' }}>
                            <NotebookBadge
                                notebook={state[key]}
                                isSelected={(selected === state[key].id)}
                                setSelected={setSelected}
                            />
                        </div>;
                    })}
                </SimpleGrid>
            </Card>
        </Container>
    </AppShell>;
}

export default withAuthenticator(Page);