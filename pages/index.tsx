import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import type { NextPage } from 'next';
import { useReducer } from 'react';
import type { Notebook } from '../API';
import config from '../aws-exports';
import MainLayout from '../components/layout';
import type { SiteReducerState, SiteReducerAction } from '../types';

import { Affix, Menu, Divider, Text } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ImageIcon, MagnifyingGlassIcon, TrashIcon, PinRightIcon } from '@modulz/radix-icons';

Amplify.configure({
    ...config
});

function reducer(state: SiteReducerState, action: SiteReducerAction) {
    switch (action.type) {
        case "setActiveNotebook":
            return { ...state, "activeNotebook": action.payload };
        default:
            return state;
    }
}

const initialState = {
    activeNotebook: {} as Notebook
};

function Demo() {
    return (
        <Menu placement="end">
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<GearIcon />}>Settings</Menu.Item>
            <Menu.Item icon={<ChatBubbleIcon />}>Messages</Menu.Item>
            <Menu.Item icon={<ImageIcon />}>Gallery</Menu.Item>
            <Menu.Item
                icon={<MagnifyingGlassIcon />}
                rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
            >
                Search
            </Menu.Item>

            <Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item icon={<PinRightIcon />}>Transfer my data</Menu.Item>,
            <Menu.Item color="red" icon={<TrashIcon />}>Delete my account</Menu.Item>
        </Menu>
    );
}

interface Props {
}

const Home: NextPage<Props> = (props: Props) => {
    const [siteState, siteDispatch] = useReducer(reducer, initialState);

    return (
        <MainLayout siteState={siteState} siteDispatch={siteDispatch} >
            <Affix position={{ 'top': 20, 'right': 20 }}>
                <Demo />
            </Affix>
            <p>This is the home page!</p>
        </MainLayout>
    );
};

export default withAuthenticator(Home);