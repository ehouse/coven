import '@aws-amplify/ui-react/styles.css';
import { AppShell, Group, Header, Button, Grid, Title, Text, Center, Container } from '@mantine/core';
import { Card, Image, Divider, Badge, useMantineTheme } from '@mantine/core';
import type { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import Fabric from '../public/images/45degreeFabric.png';
import { url } from 'inspector';


const Home: NextPage = () => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const router = useRouter();

    return (<AppShell
        styles={{ root: { backgroundImage: 'url(/images/interlaced.png)', backgroundRepeat: 'repeat' } }}
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
                            <Button component="a" href="/notebook" size='md' variant="white" color="grape">Log In</Button>
                            <Button component="a" href="/notebook" variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>New Account</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Header>
        }>
        <Container size={'xl'}>
            <div style={{ padding: '6rem 0' }}>
                <Center mb={'sm'}>
                    <Title sx={{ fontSize: 68, fontWeight: '700' }}>Spider Notes</Title>
                </Center>
                <Center>
                    <Title sx={{ fontSize: 42, fontWeight: '300' }} order={2}>A Brand New Way To Take Notes!</Title>
                </Center>
            </div>
            <Grid>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg">
                        <Title order={4} style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm }}>
                            Distraction Free Notetaking
                        </Title>
                        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras. Dolor sit amet consectetur adipiscing.
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg">
                        <Title order={4} style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm }}>
                            Built Around Knowledge Maps
                        </Title>
                        <Text size="md" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras. Dolor sit amet consectetur adipiscing.
                        </Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg">
                        <Title order={4} style={{ marginBottom: theme.spacing.sm, marginTop: theme.spacing.sm }}>
                            Safe and Secure by Default
                        </Title>
                        <Text style={{ color: secondaryColor, lineHeight: 1.5 }}>
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