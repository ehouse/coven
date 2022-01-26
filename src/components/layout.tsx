import { useState } from 'react';
import { AppShell, Burger, Button, Center, Header, MediaQuery, Navbar, List, Title, useMantineTheme } from '@mantine/core';

import CreateNotebook from './createNotebook';

interface Props {
    notebookNames: string[];
    children: React.ReactNode;
}

function Layout(props: Props) {
    const [opened, setOpened] = useState(false);
    const [modelVisibile, setModelVisibile] = useState(false);

    const theme = useMantineTheme();

    const { notebookNames } = props;

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
                        {notebookNames.map((name) => (
                            <List.Item key={name}>{name}</List.Item>
                        ))}
                    </List>
                </Navbar.Section>
                <Navbar.Section>
                    <Button fullWidth
                        onClick={() => setModelVisibile(true)}
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
                </div>
            </Header>
        }
    >
        <CreateNotebook opened={modelVisibile} setOpened={setModelVisibile} />
        {props.children}
    </AppShell>;
}

export default Layout;