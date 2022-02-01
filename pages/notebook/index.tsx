import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Affix } from '@mantine/core';
import { Amplify } from "aws-amplify";
import React from 'react';
import config from '../../aws-exports';
import MainLayout from '../../components/layout';
import OptionsMenu from '../../components/opionsMenu';

Amplify.configure({ ...config });

function Page() {
    return <MainLayout>
        <div>
            <Affix position={{ 'top': 20, 'right': 20 }}>
                <OptionsMenu />
            </Affix>
            <p>This is the Notes page!</p>
        </div>
    </MainLayout>;
}
export default withAuthenticator(Page);