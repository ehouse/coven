import React, { useCallback, useMemo, useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { AppShell, Badge, Box, Button, Card, Center, Container, Grid, Group, MediaQuery, SimpleGrid, Skeleton, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import { RiBook2Fill, RiCheckboxBlankCircleLine, RiCheckLine, RiFileAddLine } from "react-icons/ri";
import { useLongPress } from 'use-long-press';

import config from 'aws-exports';
import { CreateNotebook, SettingsNotebook, TrashNotebook } from 'components/Modals';
import NavHeader from 'components/NavHeader';
import { useNotebookListQuery, useUserInfo } from 'hooks';
import { Notebook } from 'models';

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

function EmptyPage(props: { loading: boolean; }) {
    if (props.loading) {
        return (
            <Center>
                <Skeleton height={70} />
            </Center>
        );
    } else {
        return (<Grid m='md'>
            <Grid.Col span={3} offset={8} style={{ border: '2px solid black', padding: '6px' }}>
                <Text align='center' size='lg'>Click the <RiFileAddLine /> to begin 🡽</Text>
            </Grid.Col>
        </Grid>
        );
    }
}

function stateParser(data?: Notebook[]) {
    if (!data) {
        return {};
    }

    const dataSet: Record<string, Notebook> = {};
    data.forEach((slice) => {
        dataSet[slice.id] = slice;
    });
    return dataSet;
}

function Page() {
    const theme = useMantineTheme();
    const isSmall = useMediaQuery('(max-width: 900px)');
    const userInfo = useUserInfo();

    const [selected, setSelected] = useState<string>();
    const { isLoading, data, error } = useNotebookListQuery();

    const parsedState = useMemo(() => (stateParser(data)), [data]);

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
                            <TrashNotebook notebook={parsedState[selected]} />
                            <SettingsNotebook notebook={parsedState[selected]} />
                        </Group>}
                        <CreateNotebook />
                    </Group>
                </Card.Section>
                <SimpleGrid mt='md' cols={isSmall ? 1 : 2}>
                    {Object.keys(parsedState).map((key) => {
                        return <div key={key} style={{ width: '100%' }}>
                            <NotebookBadge
                                notebook={parsedState[key]}
                                isSelected={(selected === parsedState[key].id)}
                                setSelected={setSelected}
                            />
                        </div>;
                    })}
                </SimpleGrid>
                {(!data?.length) && <EmptyPage loading={isLoading} />}
            </Card>
        </Container>
    </AppShell>;
}

export default withAuthenticator(Page);