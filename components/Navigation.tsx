import React, { useEffect, useState } from 'react';

import { Button, Grid, Group, Header, Title, useMantineTheme } from '@mantine/core';
import { Auth } from 'aws-amplify';

import { UserMenu } from 'components/UserAvatar';

interface Props {
    large?: boolean;
    hideEditorButton?: boolean;
}

function Signin() {
    return (
        <Group position='right' direction='row'>
            <Button component="a" href="/notebook" size='md' variant="white" color="red">
                Log In
            </Button>
            <Button component="a" href="/notebook" variant="gradient" gradient={{ from: 'pink', to: 'red', deg: 35 }}>
                New Account
            </Button>
        </Group>
    );
}

const Navigation: React.FC<Props> = (props: Props) => {
    const { large, hideEditorButton, ...rest } = props;
    const theme = useMantineTheme();
    const [userInfo, setUserInfo] = useState<{ username: string | null, email: string; }>({ username: null, email: 'mp' });

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((res) => {
            const username = (typeof res.username === 'string') ? res.username : 'unauthorized';
            const email = (typeof res.attributes.email === 'string') ? res.attributes.email : 'mp';
            setUserInfo({ username, email });
        });
    }, []);

    return (
        <Header
            {...rest}
            height={80}
            padding={'lg'}
            sx={{
                boxShadow: theme.shadows.md
            }}
        >
            <Grid>
                <Grid.Col span={6}>
                    <Title order={2}>🕷️ SpiderNotes</Title>
                </Grid.Col>
                <Grid.Col span={6}>
                    {userInfo.username
                        ? <UserMenu hideEditor={props.hideEditorButton} username={userInfo.username} email={userInfo.email} />
                        : <Signin />}
                </Grid.Col>
            </Grid>
        </Header>
    );
};

export default Navigation;