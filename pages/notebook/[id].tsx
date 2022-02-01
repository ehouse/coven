import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Affix, Title, Container } from '@mantine/core';
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
import Note from '../../components/note';
import { z } from "zod";

const nidSchema = z.string().uuid();

Amplify.configure({ ...config });

function Page() {
    const router = useRouter();
    const { state, dispatch } = useContext(SiteStateContext);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.isReady) {
            const nid = nidSchema.parse(router.query.id);
            const message = { id: nid };
            const query = API.graphql(graphqlOperation(queries.getNotebook, message)) as Promise<{ data: GetNotebookQuery; }>;

            query.then((q) => q.data.getNotebook)
                .then((notebook) => {
                    if (notebook !== null) {
                        dispatch({ type: 'setActiveNotebook', payload: notebook });
                    }
                    setLoading(false);
                }).catch((e) => {
                    setError(e);
                    setLoading(false);
                });
        }
    }, [dispatch, router.query.id, router.isReady]);

    // If the notebook is loading
    if (loading) {
        return (
            <MainLayout>
                <Container>
                    <Title order={2}>
                        Loading...
                    </Title>
                </Container>
            </MainLayout>
        );
    }

    // Short circuit with 404 if notebook no longer exists or if the user lacks the ACL's to see it. 
    if (!loading && !state.activeNotebook?.id) {
        return (
            <MainLayout>
                <Container>
                    <Title order={2}>
                        {`404 - Notebook (${router.query.id}) not found`}
                    </Title>
                </Container>
            </MainLayout>
        );
    }

    return <MainLayout>
        <div>
            <Affix position={{ 'top': 20, 'right': 20 }}>
                <OptionsMenu />
            </Affix>
            {`Expanded Notes page for ${state.activeNotebook.id}`}
            <Note isFocused nid={state.activeNotebook.id} initialState={''} />
        </div>
    </MainLayout>;
};

export default withAuthenticator(Page);