import '@aws-amplify/ui-react/styles.css';
import React, { useEffect, useState } from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Affix, Paper, AppShell, Group, Header, Button, Grid, Title, Text, Center, Container, Navbar, Burger, Space } from '@mantine/core';
import { Card, List, MediaQuery, ThemeIcon, useMantineTheme } from '@mantine/core';
import { Auth } from 'aws-amplify';
import { RiBook2Fill, RiShieldKeyholeFill, RiMindMap, RiDraftLine } from "react-icons/ri";

import Navigation from 'components/Navigation';


function Page() {
    const [expanded, setExpanded] = useState(false);
    const theme = useMantineTheme();

    return (<AppShell
        navbar={
            <MediaQuery
                query="(min-width: 800px)"
                styles={{ display: 'none' }}
            >
                <Navbar
                    padding="md"
                    // Breakpoint at which navbar will be hidden if hidden prop is true
                    hiddenBreakpoint="lg"
                    // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
                    hidden={!expanded}
                    // when viewport size is less than theme.breakpoints.sm navbar width is 100%
                    // viewport size > theme.breakpoints.sm – width is 300px
                    // viewport size > theme.breakpoints.lg – width is 400px
                    width={{ sm: 300, md: 300 }}
                >
                    <Text>Navigation</Text>
                    <Button component="a" href="/notebook" size='md' variant="white" color="red">
                        Log In
                    </Button>
                    <Button component="a" href="/notebook" variant="gradient" gradient={{ from: 'pink', to: 'red', deg: 35 }}>
                        New Account
                    </Button>
                </Navbar>
            </MediaQuery>
        }
        header={
            <MediaQuery
                query="(max-width: 800px)"
                styles={{ display: 'none' }}
            >
                <Navigation />
            </MediaQuery>
        }>
        <Container size={'xl'}>
            <MediaQuery largerThan={800} styles={{ display: 'none' }}>
                <Burger
                    opened={expanded}
                    onClick={() => setExpanded((o) => !o)}
                    size="lg"
                    color={theme.colors.gray[6]}
                    mr="xl"
                />
            </MediaQuery>
            <div style={{ padding: '4.5rem 0' }}>
                <Center mb={'xl'}>
                    <Title sx={{ fontSize: 68, fontWeight: '700' }}>Spider Notes</Title>
                </Center>
                <Center>
                    <Title sx={{ fontSize: 44, fontWeight: '500' }} order={2}>A Brand New Way to Take Notes!</Title>
                </Center>
            </div>
            <Grid gutter="xl" sx={{ flex: 1 }}>
                <Grid.Col md={12} lg={4}>
                    <Card shadow="md" padding="lg" sx={{ minHeight: '16rem' }}>
                        <Card.Section sx={{ boxShadow: theme.shadows.sm }}>
                            <div style={{
                                width: 'auto',
                                background: `linear-gradient(15deg, ${theme.colors.pink[8]}, ${theme.colors.red[5]}), url(/images/shattered.png)`,
                                backgroundBlendMode: 'normal',
                            }}>
                                <Title order={3} sx={{ color: theme.colors.gray[0] }} style={{ padding: '1.5rem 1rem' }}>
                                    <Center inline>
                                        <ThemeIcon mr='md' color="dark" radius="xl" size="lg"><RiBook2Fill /></ThemeIcon>
                                        Distraction Free Notetaking
                                    </Center>
                                </Title>
                            </div>
                        </Card.Section>
                        <Text size="md" style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm }}>
                            <List spacing={'sm'}>
                                <List.Item>Designed from the ground up to minimize distractions, keep writing!</List.Item>
                                <List.Item>Minimize clutter and reduce information overload by hiding unnecessary notes.</List.Item>
                            </List>
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col md={12} lg={4}>
                    <Card shadow="md" padding="lg" sx={{ minHeight: '16rem' }}>
                        <Card.Section sx={{ boxShadow: theme.shadows.sm }}>
                            <div style={{
                                width: 'auto',
                                background: `linear-gradient(-15deg, ${theme.colors.pink[8]}, ${theme.colors.red[5]}), url(/images/shattered.png)`,
                                backgroundBlendMode: 'normal',
                            }}>
                                <Title order={3} sx={{ color: theme.colors.gray[0] }} style={{ padding: '1.5rem 1rem' }}>
                                    <Center inline>
                                        <ThemeIcon mr='md' color="dark" radius="xl" size="lg"><RiMindMap /></ThemeIcon>
                                        Built Around Knowledge Maps
                                    </Center>
                                </Title>
                            </div>
                        </Card.Section>
                        <Text size="md" style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm }}>
                            <List spacing={'sm'}>
                                <List.Item>Connect relevent topics together to create a map of knowledge.</List.Item>
                                <List.Item>Powerful search feature to find exactly what you are looking for.</List.Item>
                            </List>
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col md={12} lg={4}>
                    <Card shadow="md" padding="lg" sx={{ minHeight: '16rem' }}>
                        <Card.Section sx={{ boxShadow: theme.shadows.sm }}>
                            <div style={{
                                width: 'auto',
                                background: `linear-gradient(15deg, ${theme.colors.pink[8]}, ${theme.colors.red[5]}), url(/images/shattered.png)`,
                                backgroundBlendMode: 'normal',
                            }}>
                                <Title order={3} sx={{ color: theme.colors.gray[0] }} style={{ padding: '1.5rem 1rem' }}>
                                    <Center inline>
                                        <ThemeIcon mr='md' color="dark" radius="xl" size="lg"><RiShieldKeyholeFill /></ThemeIcon>
                                        Safe and Secure by Default
                                    </Center>
                                </Title>
                            </div>
                        </Card.Section>

                        <Text size="md" style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm }}>
                            <List spacing={'sm'}>
                                <List.Item>All information stored and encrypted in the cloud.</List.Item>
                                <List.Item>Never again worry about losing data or forgetting which notebook you wrote something in.</List.Item>
                                <List.Item>Download data backups for peace of mind.</List.Item>
                            </List>
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    </AppShell>
    );
};

export default Page;