import { useState } from 'react';
import { AppShell, Burger, Button, Container, Group, Grid, Badge, Header, MediaQuery, Navbar, List, Title, ThemeIcon, useMantineTheme } from '@mantine/core';
import { IoLogoGithub } from "react-icons/io5";
import Amplify, { Auth, API } from 'aws-amplify';

import { Notebook } from "../graphql";
import CreateNotebookModel from './createNotebookModel';

// Setup and import the auth config
import config from '../aws-exports';
Amplify.configure({
    ...config,
});

interface Props {
    notebooks: Notebook[];
    children: React.ReactNode;
}

function MainLayout(props: Props) {
    const [opened, setOpened] = useState(false);
    const [modelVisible, setModelVisible] = useState(false);

    const theme = useMantineTheme();

    return <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
            <Navbar
                padding="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                width={{ sm: 200, lg: 250 }}
            >
                <Navbar.Section grow mt="lg">
                    <Title order={3}>Notebooks</Title>
                    <List>
                        {props.notebooks.map(({ title }) => (
                            <List.Item key={title}>{title}</List.Item>
                        ))}
                    </List>
                </Navbar.Section>
                <Navbar.Section>
                    <Button fullWidth
                        onClick={() => setModelVisible(true)}
                    >
                        Create Notebook
                    </Button>
                </Navbar.Section>
            </Navbar>
        }
        header={
            <Header height={70} padding="md">
                {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>
                    <Title>Coven</Title>
                    <div style={{ width: '100%' }}>
                        <Group position="right" >
                            <Button
                                color="dark"
                                component="a"
                                href="https://github.com/ehouse/coven"
                                target="_blank"
                                variant="outline"
                                leftIcon={<IoLogoGithub size={'1.8em'} />}
                            >
                                Source Code
                            </Button>
                        </Group>
                    </div>
                </div>
            </Header>
        }
    >
        <CreateNotebookModel opened={modelVisible} setOpened={setModelVisible} />
        {props.children}
    </AppShell>;
}

export default MainLayout;