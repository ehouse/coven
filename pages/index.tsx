import '@aws-amplify/ui-react/styles.css';
import { AppShell, Group, Header, Button, Grid, Title, Text, Center, Container } from '@mantine/core';
import { Card, Image, Divider, ThemeIcon, useMantineTheme } from '@mantine/core';
import type { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import { RiBook2Fill, RiShieldKeyholeFill, RiMindMap } from "react-icons/ri";

const Home: NextPage = () => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const router = useRouter();

    return (<AppShell
        header={
            <Header
                height={80}
                padding={'lg'}
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
                            <Button component="a" href="/notebook" size='md' variant="white" color="red">
                                Log In
                            </Button>
                            <Button component="a" href="/notebook" variant="gradient" gradient={{ from: 'pink', to: 'red', deg: 35 }}>
                                New Account
                            </Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Header>
        }>
        <Container size={'xl'}>
            <div style={{ padding: '4rem 0 7rem 0' }}>
                <Center mb={'xl'}>
                    <Title sx={{ fontSize: 68, fontWeight: '700' }}>Spider Notes</Title>
                </Center>
                <Center>
                    <Title sx={{ fontSize: 44, fontWeight: '500' }} order={2}>A Brand New Way To Take Notes!</Title>
                </Center>
            </div>
            <Grid gutter="xl" >
                <Grid.Col md={12} lg={4}>
                    <Card shadow="md" padding="lg">
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
                        <Text size="md" style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm, color: secondaryColor, lineHeight: 1.5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras. Dolor sit amet consectetur adipiscing.
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col md={12} lg={4}>
                    <Card shadow="md" padding="lg">
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
                        <Text size="md" style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm, color: secondaryColor, lineHeight: 1.5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras. Dolor sit amet consectetur adipiscing.
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col md={12} lg={4}>
                    <Card shadow="md" padding="lg">
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

                        <Text size="md" style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm, color: secondaryColor, lineHeight: 1.5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras. Dolor sit amet consectetur adipiscing.
                        </Text>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    </AppShell>
    );
};

export default Home;