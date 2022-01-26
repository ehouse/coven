import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, List, Title, useMantineTheme } from '@mantine/core';

interface Props {
    notebookNames: string[];
    children: React.ReactNode;
}

function Layout(props: Props) {
    const [opened, setOpened] = useState(false);
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
                width={{ sm: 200, lg: 300 }}
            >
                <Navbar.Section>
                    <Title order={3}>Notebook</Title>
                    <List>
                        {notebookNames.map((name) => (
                            <List.Item key={name}>{name}</List.Item>
                        ))}
                    </List>
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
        {props.children}
    </AppShell>;
}

export default Layout;