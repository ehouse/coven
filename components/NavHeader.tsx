import React from 'react';

import { Button, Grid, Group, Header, Title, useMantineTheme } from '@mantine/core';

import { UserMenu, UserAvatar } from 'components/UserAvatar';
import type { UserInfo } from 'types';

interface Props {
    userInfo: UserInfo;
    large?: boolean;
    hidden?: boolean;
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

function NavHeader(props: Props) {
    const theme = useMantineTheme();

    return (
        <Header
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
                    {props.userInfo
                        ? (props.hideEditorButton
                            ? <Group position='right'><UserAvatar userInfo={props.userInfo} /></Group>
                            : <UserMenu userInfo={props.userInfo} />)
                        : <Signin />}
                </Grid.Col>
            </Grid>
        </Header>
    );
}

export default NavHeader;