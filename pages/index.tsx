import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import type { NextPage } from 'next';
import { useReducer } from 'react';
import type { Notebook } from '../API';
import config from '../aws-exports';
import MainLayout from '../components/layout';
import type { SiteReducerState, SiteReducerAction } from '../types';

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

interface Props {
}

const Home: NextPage<Props> = (props: Props) => {
    const [siteState, siteDispatch] = useReducer(reducer, initialState);

    return (
        <MainLayout siteState={siteState} siteDispatch={siteDispatch} >
            <p>This is the home page!</p>
        </MainLayout>
    );
};

export default withAuthenticator(Home);