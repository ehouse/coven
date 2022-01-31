import { Button, Group, Modal, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import Amplify, { API, Cache, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import { CreateNotebookMutation, Notebook } from '../API';
import config from '../aws-exports';
import * as mutations from '../graphql/mutations';

Amplify.configure({
    ...config
});

interface Props {
    opened: boolean;
    handler: { append: (...items: Notebook[]) => void; };
    setOpened: (arg0: boolean) => void;
}

function CreateNotebookModel(props: Props) {
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState('');

    function createNotebook() {
        setLoading(true);
        const message = { title: title, description: description };
        const query = API.graphql(graphqlOperation(mutations.createNotebook, { input: message })) as Promise<{ data: CreateNotebookMutation; }>;

        query.then((results) => {
            const data = results.data.createNotebook;
            if (typeof data === 'undefined' || data === null) {
                throw Error("Undefined Post Results");
            } else {
                // Add the new post to the parent list
                props.handler.append(data);
                Cache.setItem(`listNotebooks`, data);
            }
            // Clear out model settings
            setLoading(false);
            props.setOpened(false);
        }).catch((e) => {
            console.log("Error posting data", e);
        });
    }

    return (
        <Modal
            opened={props.opened}
            onClose={() => props.setOpened(false)}
            title="Create Notebook"
        >
            <SimpleGrid cols={1}>
                <TextInput
                    value={title}
                    placeholder="title"
                    label="Notebook Title"
                    required
                    onChange={(event) => setTitle(event.currentTarget.value)}
                />
                <Textarea
                    placeholder="Describe the Notebook"
                    label="Description"
                    value={description}
                    onChange={(event) => setDescription(event.currentTarget.value)}
                />
                <Group position={'right'}>
                    <Button type="submit" disabled={title.length === 0} loading={loading} onClick={createNotebook} >
                        Create
                    </Button>
                </Group>
            </SimpleGrid>
        </Modal>
    );
}

export default CreateNotebookModel;