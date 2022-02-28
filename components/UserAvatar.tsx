import React, { useMemo } from 'react';

import { Avatar, Button, Group, Menu, Loader } from '@mantine/core';
import { ExitIcon, PersonIcon } from '@modulz/radix-icons';
import MD5 from "crypto-js/md5";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiBook2Fill, RiShieldKeyholeFill, RiMindMap, RiDraftLine } from "react-icons/ri";

/**
 * Creates a user avatar with an assiocted menu.
 * New menu items can be passed in as children
 */
function UserAvatar(props: { username: string, email: string; children?: React.ReactNode; }) {
    const router = useRouter();

    const userHash: string = useMemo(() => (MD5(props.email).toString()), [props.email]);

    return (
        <Menu control={<Avatar src={`https://www.gravatar.com/avatar/${userHash}`} mt={-7} radius='xl' size="lg" />}>
            <Menu.Label>{`Welcome, ${props.username}!`}</Menu.Label>
            {props.children}
            <Menu.Item icon={<PersonIcon />} disabled>Profile</Menu.Item>
            <Menu.Item icon={<ExitIcon />} onClick={() => router.push('/logout')}>Log out</Menu.Item>
        </Menu>
    );
}

function EditorButton() {
    return (
        <Link passHref href='/notebook/'>
            <Button size='md' component="a" mt={-10} leftIcon={<RiDraftLine />} variant="gradient" gradient={{ from: 'pink', to: 'red', deg: 35 }}>
                Editor
            </Button>
        </Link>
    );
}

function UserMenu(props: { username: string, email: string, hideEditor?: boolean; }) {
    return (
        <Group position='right' direction='row' spacing='xl'>
            {!props.hideEditor && <EditorButton />}
            <UserAvatar username={props.username} email={props.email} />
        </Group>
    );
}

export { UserAvatar, EditorButton, UserMenu };