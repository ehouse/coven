import React, { useMemo } from 'react';

import { Avatar, Button, Group, Menu, Loader } from '@mantine/core';
import { ExitIcon, PersonIcon } from '@modulz/radix-icons';
import { Auth } from 'aws-amplify';
import MD5 from "crypto-js/md5";
import Link from 'next/link';
import { useRouter } from 'next/router';

import type { UserInfo } from 'types';

function UserAvatar(props: { userInfo: UserInfo; }) {
    const router = useRouter();

    const username = props.userInfo?.username ?? 'mp';
    const email = props.userInfo?.email ?? 'mp';
    const userHash: string = useMemo(() => (MD5(email).toString()), [email]);

    if (!props.userInfo) {
        return (
            <Menu control={<Avatar src={`https://www.gravatar.com/avatar/${userHash}`} mt={-7} radius='xl' size="lg" />}>
                <Menu.Item><Loader variant='dots' /></Menu.Item>
            </Menu>
        );
    }

    return (
        <Menu control={<Avatar src={`https://www.gravatar.com/avatar/${userHash}`} mt={-7} radius='xl' size="lg" />}>
            <Menu.Label>{`Welcome, ${username}!`}</Menu.Label>
            <Menu.Item icon={<PersonIcon />} disabled>Profile</Menu.Item>
            <Menu.Item icon={<ExitIcon />} onClick={() => Auth.signOut().then(() => router.push('/'))}>Log out</Menu.Item>
        </Menu>
    );
}

function EditorButton() {
    return (
        <Link passHref href='/notebook/'>
            <Button size='md' component="a" mt={-10} variant="gradient" gradient={{ from: 'pink', to: 'red', deg: 35 }}>
                Editor
            </Button>
        </Link>
    );
}

function UserMenu(props: { userInfo: UserInfo; }) {
    return (
        <Group position='right' direction='row' spacing='xl'>
            <EditorButton />
            <UserAvatar userInfo={props.userInfo} />
        </Group>
    );
}

export { UserAvatar, EditorButton, UserMenu };