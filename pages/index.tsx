import '@aws-amplify/ui-react/styles.css';
import { AppShell, Group, Header, Button, Grid, Title, Text, Center, Container } from '@mantine/core';
import { Card, Image, Badge, useMantineTheme } from '@mantine/core';
import type { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';


const Home: NextPage = () => {
    const router = useRouter();

    return (<AppShell
        header={
            <Header height={60} padding={'sm'}>
                <Grid>
                    <Grid.Col span={6}>
                        <Title order={2}>SpiderNotes</Title>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Group position='right' direction='row'>
                            <Button component="a" href="/notebook" variant="outline">New Account</Button>
                            <Button component="a" href="/notebook" variant="outline">Login</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Header>
        }>
        <Container size={'xl'}>
            <div style={{ padding: '6rem' }}>
                <Center>
                    <Title>Spider Notes</Title>
                </Center>
                <Center>
                    <Title order={2}>A Brand New Way To Take Notes!</Title>
                </Center>
            </div>
            <Grid>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg">
                        Card 1
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg">
                        Card 2
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg">
                        Card 3
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    </AppShell>
    );
};

export default Home;