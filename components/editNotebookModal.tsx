import { Button, Group, Modal, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import { DeleteNotebookMutation } from '../API';
import config from '../aws-exports';
import * as mutations from '../graphql/mutations';

Amplify.configure({
    ...config
});

interface Props {
    opened: boolean;
    handler: { append: (...items: unknown[]) => void; };
    setOpened: (arg0: boolean) => void;
}

function EditNotebookModel(props: Props) {
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState('');

    function deleteNotebook() {
        setLoading(true);
        const message = { title: title, description: description };
        const query = API.graphql(graphqlOperation(mutations.deleteNotebook, { input: message })) as Promise<{ data: DeleteNotebookMutation; }>;

        query.then((results) => {
            // Add the new post to the parent list
            props.handler.append(results.data.deleteNotebook);
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
                    <Button type="submit" disabled={title.length === 0} loading={loading} onClick={deleteNotebook} >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={title.length === 0} loading={loading} onClick={deleteNotebook} >
                        Delete
                    </Button>
                </Group>
            </SimpleGrid>
        </Modal>
    );
}

export default EditNotebookModel;