import { Button, Group, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { ContextModalProps } from '@mantine/modals';
import { API, graphqlOperation } from 'aws-amplify';
import React from 'react';
import { CreateNotebookMutation } from "../API";
import * as mutations from '../graphql/mutations';


export const CreateNotebookModal = ({ context, id, props }: ContextModalProps) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const focusTrapRef = useFocusTrap();

    const submit = async () => {
        setLoading(true);
        const message = { title: title, description: description };
        try {
            const query = await API.graphql(graphqlOperation(mutations.createNotebook, { input: message })) as Promise<{ data: CreateNotebookMutation; }>;
            props.createNotebook((await query).data.createNotebook);
        } catch (e) {
            console.log("Error creating notebook", e);
        }
        setLoading(false);
        context.closeModal(id);
    };

    return <SimpleGrid ref={focusTrapRef} cols={1}>
        <TextInput
            data-autofocus
            value={title}
            placeholder="Title"
            label="Notebook Title"
            required
            onChange={(event) => setTitle(event.currentTarget.value)}
        />
        <Textarea
            placeholder="Optional..."
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.currentTarget.value)}
        />
        <Group position={'right'}>
            <Button variant="outline" onClick={() => context.closeModal(id)} >
                Cancel
            </Button>
            <Button type="submit" loading={loading} disabled={title.length === 0} onClick={submit} >
                Submit
            </Button>
        </Group>
    </SimpleGrid>;
};