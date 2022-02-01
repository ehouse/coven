import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Affix } from '@mantine/core';
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
import { SiteStateContext } from '../../context';
import config from '../../aws-exports';
import MainLayout from '../../components/layout';
import OptionsMenu from '../../components/opionsMenu';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GetNotebookQuery, Notebook } from "../../API";
import Error from 'next/error';

Amplify.configure({ ...config });

function Page() {
    const router = useRouter();
    const { state, dispatch } = useContext(SiteStateContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const { id } = router.query;

    useEffect(() => {
        if (router.isReady) {
            setLoading(true);
            const message = { id: String(id) };
            const query = API.graphql(graphqlOperation(queries.getNotebook, message)) as Promise<{ data: GetNotebookQuery; }>;

            query.then((q) => q.data.getNotebook)
                .then((notebook) => {
                    dispatch({ type: 'setActiveNotebook', payload: notebook });
                    setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                });
        }
    }, [dispatch, id, router.isReady]);

    return <MainLayout>
        <div>
            <Affix position={{ 'top': 20, 'right': 20 }}>
                <OptionsMenu />
            </Affix>
            {loading ? <p>Loading...</p> : <p>{`Expanded Notes page for ${state.activeNotebook?.id}`}</p>}
        </div>
    </MainLayout>;
};

export default withAuthenticator(Page);