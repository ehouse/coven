import { Affix, AppShell, Button, Divider, Group, Navbar, ScrollArea, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { RiAddCircleLine, RiBook2Fill, RiBookOpenFill } from "react-icons/ri";
import { Notebook } from "../API";
import type { SidebarReducerAction, SidebarState } from '../types';
import OptionsMenu from './OpionsMenu';

interface Props {
    children: React.ReactNode;
    sidebarState: SidebarState;
    sidebarDispatch: React.Dispatch<SidebarReducerAction>;
}
interface NotebookBadgeProps {
    triggerActive: () => void;
    notebook: Notebook;
    isSelected: boolean;
}

function NotebookBadge(props: NotebookBadgeProps) {
    const theme = useMantineTheme();
    const notebookColor = props.notebook.color ? props.notebook.color : theme.colors.blue[5];

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
        onClick={props.triggerActive}
        leftIcon={
            <ThemeIcon sx={{ backgroundColor: notebookColor }} size={40} radius="md">
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
    const router = useRouter();
    const modals = useModals();

    const { sidebarState, sidebarDispatch } = props;

    const setActiveID = useCallback((activeID) => sidebarDispatch({ type: 'setActiveID', payload: activeID }), [sidebarDispatch]);
    const addNotebook = useCallback((notebook) => sidebarDispatch({ type: 'addNotebook', payload: notebook }), [sidebarDispatch]);
    const deleteNotebook = useCallback((id) => sidebarDispatch({ type: 'deleteNotebook', payload: id }), [sidebarDispatch]);
    const updateNotebook = useCallback((id, notebook) => sidebarDispatch({ type: 'updateNotebook', payload: { id: id, notebook: notebook } }), [sidebarDispatch]);


    const openCreateModal = () => modals.openContextModal('createNotebookModal', {
        title: 'Create Notebook',
        props: {
            sidebarNotebooks: sidebarState.notebooks,
            addNotebook: addNotebook,
            setActiveID: setActiveID
        }
    });

    const activeNotebook = sidebarState.activeID;

    return <AppShell
        navbarOffsetBreakpoint="sm"
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
                        {Object.keys(sidebarState.notebooks).map((key) => {
                            return <div key={key} style={{ width: '100%' }}>
                                <NotebookBadge
                                    notebook={sidebarState.notebooks[key]}
                                    isSelected={(key === sidebarState.activeID)}
                                    triggerActive={() => {
                                        console.log(`Triggering state change ${key}`);
                                        sidebarDispatch({ type: 'setActiveID', payload: key });
                                        router.push(`/notebook/${key}`);
                                    }}
                                />
                            </div>;
                        })}
                    </Group>
                </Navbar.Section>
                <Navbar.Section>
                    <Divider />
                    <Group position={'right'}>
                        <Button mt={'sm'}
                            fullWidth
                            size={'md'}
                            leftIcon={<RiAddCircleLine />}
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'red', deg: 35 }}
                            disabled={sidebarState.notebooks.length >= 25}
                            onClick={() => openCreateModal()}
                        >
                            Create Notebook
                        </Button>
                    </Group>
                </Navbar.Section>
            </ Navbar>
        }
    >
        <Affix position={{ 'top': 20, 'right': 20 }}>
            <OptionsMenu notebook={sidebarState.notebooks[sidebarState.activeID]} updateNotebook={updateNotebook} deleteNotebook={deleteNotebook} />
        </Affix>
        {props.children}
    </AppShell>;
}

export default MainLayout;