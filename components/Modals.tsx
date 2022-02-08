import React from 'react';

import { Box, Button, ColorSwatch, Group, SimpleGrid, Space, Text, Textarea, TextInput, Title, useMantineTheme } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { ContextModalProps } from '@mantine/modals';
import { ModalsContext } from '@mantine/modals/lib/context';
import { CheckIcon } from '@modulz/radix-icons';
import { API, graphqlOperation } from 'aws-amplify';

import { CreateNotebookMutation, Notebook, UpdateNotebookMutation } from "API";
import * as mutations from 'graphql/mutations';
import type { GraphQLResult } from 'types';

interface DeleteModalProps {
    modals: ModalsContext;
    notebook: Notebook;
    deleteNotebook: (id: string) => void;
}

/**
 * Wrapper around the Mantine DeleteModal. Handles opening the model plus the action of deleting.
 * Needs to be passed a modal context to work. 
 */
export function openDeleteNotebookModal(args: DeleteModalProps) {
    const deleteNotebookRequest = async () => {
        try {
            const query = await API.graphql(graphqlOperation(mutations.deleteNotebook, { input: { id: args.notebook.id } }));
            args.deleteNotebook(args.notebook.id);
        } catch (e) {
            console.log(`Error deleting ${args.notebook.id}`, e);
        }
    };

    return args.modals.openConfirmModal({
        title: <Title order={4}>{`Delete ${args.notebook.title}?`}</Title>,
        labels: { confirm: 'Delete', cancel: "Cancel" },
        confirmProps: { color: 'red' },
        onConfirm: () => deleteNotebookRequest(),
        children: (<>
            <Text>Are you sure? This action is permanent.</Text>
            <Space h={'md'} />
            <Text>This will delete the notebook and all assiocated data along with it. Once it is deleted it is gone for good.</Text>
        </>)
    });
};

interface OpenSettingsModalsProps {
    modals: ModalsContext;
    notebook: Notebook;
    updateNotebook: (id: string, notebook: Notebook) => void;
}

/**
 * Wrapper around the Mantine Context Modal. 
 * Opens the modal called 'notebookSettingsModal' loaded in via a Mantine modal Context.
 */
export function openSettingsModal(args: OpenSettingsModalsProps) {
    return args.modals.openContextModal('notebookSettingsModal', {
        title: 'Settings - Update Notebook',
        props: {
            initialState: { notebook: args.notebook },
            updateNotebook: args.updateNotebook
        }
    });
}

export const NotebookSettingsModal = (ModalProps: ContextModalProps) => {
    const { context, id, props } = ModalProps;
    const focusTrapRef = useFocusTrap();
    const theme = useMantineTheme();

    const notebook: Notebook = props.initialState.notebook;
    const updateNotebook: (id: string, notebook: Notebook) => void = props.updateNotebook;

    const [title, setTitle] = React.useState(notebook.title);
    const [description, setDescription] = React.useState(notebook.description ?? '');
    const [selectedColor, setColor] = React.useState(notebook.color ?? '#339af0');
    const [loading, setLoading] = React.useState(false);

    const swatches = Object.keys(theme.colors).map((color) => (
        <ColorSwatch
            component="button"
            style={{ color: '#fff', cursor: 'pointer' }}
            onClick={() => setColor(theme.colors[color][6])}
            key={color}
            color={theme.colors[color][6]}>
            {(selectedColor === theme.colors[color][6]) && <CheckIcon />}
        </ColorSwatch>
    ));

    const submit = async () => {
        setLoading(true);
        const message = { id: notebook.id, title: title, description: description, color: selectedColor };
        try {
            const query = API.graphql(graphqlOperation(mutations.updateNotebook, { input: message })) as GraphQLResult<UpdateNotebookMutation>;
            const data = (await query).data?.updateNotebook;
            if (data === null || typeof data === 'undefined') {
                throw Error(`Malformed response from server. Server Response: ${JSON.stringify(query)}`);
            }
            updateNotebook(notebook.id, data);
        } catch (e) {
            console.log("Error updating notebook", e);
        }
        setLoading(false);
        ModalProps.context.closeModal(ModalProps.id);
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
        <Box sx={(theme) => ({ marginBottom: theme.spacing.md })}>
            <Text mb='xs' size="sm">Color Picker</Text>
            <Group spacing={3}>
                {swatches}
            </Group>
        </Box>
        <Group position={'right'}>
            <Button variant="outline" onClick={() => ModalProps.context.closeModal(ModalProps.id)} >
                Cancel
            </Button>
            <Button type="submit" loading={loading} disabled={title.length === 0} onClick={submit} >
                Update
            </Button>
        </Group>
    </SimpleGrid>;
};


export const CreateNotebookModal = (ModalProps: ContextModalProps) => {
    const { context, id, props } = ModalProps;
    const addNotebook: (arg0: Notebook) => void = props.addNotebook;

    const theme = useMantineTheme();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [selectedColor, setColor] = React.useState(theme.colors.blue[6]);
    const focusTrapRef = useFocusTrap();

    const swatches = Object.keys(theme.colors).map((color) => (
        <ColorSwatch
            component="button"
            style={{ color: '#fff', cursor: 'pointer' }}
            onClick={() => setColor(theme.colors[color][6])}
            key={color}
            color={theme.colors[color][6]}>
            {(selectedColor === theme.colors[color][6]) && <CheckIcon />}
        </ColorSwatch>
    ));

    const submit = async () => {
        setLoading(true);
        const message = { title: title, description: description, color: selectedColor };
        try {
            const query = await API.graphql(graphqlOperation(mutations.createNotebook, { input: message })) as GraphQLResult<CreateNotebookMutation>;
            const data = (await query).data?.createNotebook;
            if (data === null || typeof data === 'undefined') {
                throw Error(`Malformed response from server. Server Response: ${JSON.stringify(query)}`);
            }
            // If successfully posted to Graphql, then create a corilating notebook in the sidebar and set it active
            addNotebook(data);
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
        <Box sx={(theme) => ({ marginBottom: theme.spacing.md })}>
            <Text mb='xs' size="sm">Color Picker</Text>
            <Group spacing={3}>
                {swatches}
            </Group>
        </Box>
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