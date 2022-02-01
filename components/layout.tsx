import { AppShell, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { API, graphqlOperation } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect } from 'react';
import { RiAddCircleLine, RiBook2Fill, RiBookOpenFill } from "react-icons/ri";
import { ListNotebooksQuery, Notebook } from "../API";
import { SiteStateContext } from '../context';
import * as queries from '../graphql/queries';

interface Props {
    children: React.ReactNode;
}
interface NotebookBadgeProps {
    setActiveNotebook: (arg0: Notebook) => void;
    notebook: Notebook;
    isSelected: boolean;
}

function NotebookBadge(props: NotebookBadgeProps) {
    const router = useRouter();

    return <Button
        size="lg"
        fullWidth
        variant="subtle"
        styles={(theme) => ({
            root: {
                paddingLeft: 5,
                paddingRight: 0,
                backgroundColor: props.isSelected ? theme.colors.blue[0] : 'inherit',
                '&:hover': {
                    backgroundColor: theme.fn.darken(theme.colors.blue[0], 0.05),
                },
            },
            label: {
                flexGrow: 2,
            }
        })}
        onClick={() => {
            props.setActiveNotebook(props.notebook);
            router.push(`/notebook/${props.notebook.id}`);
        }}
        leftIcon={
            <ThemeIcon size={40} radius="md">
                {props.isSelected ? <RiBookOpenFill /> : <RiBook2Fill />}
            </ThemeIcon >
        }>
        <div>
            <Text weight="700" style={{ textAlign: 'initial' }}>{props.notebook.title}</Text>
            <Text size="sm" color="gray" style={{ textAlign: 'initial' }}>{props.notebook.description}</Text>
        </div>
    </Button>;
}

function MainLayout(props: Props) {
    const { state, dispatch } = useContext(SiteStateContext);
    const modals = useModals();

    const setActiveNotebook = useCallback((notebook: Notebook) => (dispatch({ type: 'setActiveNotebook', payload: notebook })), [dispatch]);

    const openCreateModal = () => modals.openContextModal('createNotebookModal', {
        title: 'Create Notebook',
        props: {
            createNotebook: (notebook: Notebook) => (dispatch({ type: 'createNotebook', payload: notebook }))
        }
    });

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
                            <div key={n.title} style={{ width: '100%' }}>
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
                    <Group position={'right'}>
                        <Button mt={'sm'}
                            fullWidth
                            size={'md'}
                            leftIcon={<RiAddCircleLine />}
                            disabled={state.notebooks.length >= 25}
                            onClick={() => openCreateModal()}
                        >
                            Create Notebook
                        </Button>
                    </Group>
                </Navbar.Section>
            </ Navbar>
        }
    >
        {props.children}
    </AppShell>;
}

export default MainLayout;