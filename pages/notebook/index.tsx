import React, { useEffect, useState, useCallback } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Card, Grid, Box, Button, ThemeIcon, AppShell, Center, MediaQuery, Group, Container, Header, Text, Paper, Title, useMantineTheme } from '@mantine/core';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiAddCircleLine, RiBook2Fill, RiDraftLine } from "react-icons/ri";
import { useLongPress } from 'use-long-press';

import { ListNotebooksQuery, Notebook } from "API";
import config from 'aws-exports';
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

    const notebookColor = props.notebook.color ? props.notebook.color : theme.colors.blue[5];

    // Bindings and callback for long press. Passed directly to the buttons
    const successCallback = useCallback(() => {
        setSelected(notebook.id);
    }, [notebook, setSelected]);

    const cancelCallback = useCallback(() => {
        router.push(`/notebook/${notebook.id}`);
    }, [router, notebook.id]);

    const bind = useLongPress(successCallback, {
        onCancel: cancelCallback,
    });

    const borderSelect = {
        border: `1px solid ${theme.colors.dark[1]}`,
        backgroundColor: theme.colors.gray[1],
        borderRadious: '5px'
    };

    return <Button
        {...bind}
        size="xl"
        fullWidth
        variant="subtle"
        styles={(theme) => ({
            root: {
                paddingLeft: 10,
                paddingRight: 0,
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
            <ThemeIcon sx={{ backgroundColor: notebookColor }} size={40} radius="md">
                <RiBook2Fill />
            </ThemeIcon >
        }>
        <div>
            <Text weight="700" style={{ textAlign: 'initial' }}>{props.notebook.title}</Text>
            <Text size="sm" color="gray" style={{ textAlign: 'initial' }}>{props.notebook.description}</Text>
        </div>
    </Button>;
}


function Page() {
    const theme = useMantineTheme();

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState<NotebooksData>({});
    const [selected, setSelected] = useState<string>();

    const userInfo = useUserInfo();

    const fetchData = useCallback(async () => {
        setLoading(true);
        const query = API.graphql(graphqlOperation(queries.listNotebooks)) as GraphQLResult<ListNotebooksQuery>;
        const items = (await query).data?.listNotebooks?.items;
        if (typeof items !== 'undefined') {
            const constructedState: NotebooksData = {};
            items.forEach((x) => {
                if (x !== null)
                    constructedState[x.id] = x;
            });
            setState(constructedState);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData();
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
                        <Button sx={{ justifyItem: 'flex-end' }} leftIcon={<RiDraftLine />}>
                            Create
                        </Button>
                    </Group>
                </Card.Section>
                <Group mt={'sm'} spacing={'xs'}>
                    {Object.keys(state).map((key) => {
                        return <div key={key} style={{ width: '100%' }}>
                            <NotebookBadge
                                notebook={state[key]}
                                isSelected={(selected === state[key].id)}
                                setSelected={setSelected}
                            />
                        </div>;
                    })}
                </Group>

            </Card>
        </Container>
    </AppShell>;
}

export default withAuthenticator(Page);