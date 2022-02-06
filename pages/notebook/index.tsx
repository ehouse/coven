import React, { useEffect, useState, useCallback } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Avatar, Grid, Button, ThemeIcon, AppShell, Center, MediaQuery, Group, Container, Header, Text, Paper, Title, useMantineTheme } from '@mantine/core';
import { Amplify, API, graphqlOperation } from "aws-amplify";
import Link from 'next/link';
import { RiAddCircleLine, RiBook2Fill, RiBookOpenFill } from "react-icons/ri";

import { ListNotebooksQuery, Notebook } from "API";
import config from 'aws-exports';
import * as queries from 'graphql/queries';
import { GraphQLResult, NotebooksData } from 'types';

Amplify.configure({ ...config });

interface NotebookBadgeProps {
    notebook: Notebook;
}

function NotebookBadge(props: NotebookBadgeProps) {
    const theme = useMantineTheme();
    const notebookColor = props.notebook.color ? props.notebook.color : theme.colors.blue[5];

    return <Link passHref href={`/notebook/${props.notebook.id}`}>
        <Button
            size="xl"
            fullWidth
            component="a"
            variant="subtle"
            styles={(theme) => ({
                root: {
                    paddingLeft: 10,
                    paddingRight: 0,
                    backgroundColor: theme.colors.blue[0],
                    '&:hover': {
                        backgroundColor: theme.fn.darken(theme.colors.blue[0], 0.05),
                    },
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
        </Button>
    </Link>;
}


function Page() {
    const theme = useMantineTheme();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState<NotebooksData>({});

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
                <Header
                    height={70}
                    padding={'sm'}
                    sx={{
                        boxShadow: theme.shadows.md
                    }}
                >
                    <Grid>
                        <Grid.Col span={6}>
                            <Title order={2}>SpiderNotes</Title>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Group position='right' direction='row'>
                                <Center inline>
                                    <Avatar mt={-5} size="lg" />
                                </Center>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Header>
            </MediaQuery>
        }>
        <Container>
            <Paper withBorder padding='xl'>
                <Title order={2}>Notebooks</Title>
                <Group mt={'sm'} spacing={'xs'}>
                    {Object.keys(state).map((key) => {
                        return <div key={key} style={{ width: '100%' }}>
                            <NotebookBadge
                                notebook={state[key]}
                            />
                        </div>;
                    })}
                </Group>
                <Group position='right'>
                    <Button mt='md' mr='md'>
                        Create Notebook
                    </Button>
                </Group>
            </Paper>
        </Container>
    </AppShell>;
}

export default Page;