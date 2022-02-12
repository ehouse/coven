import React, { useCallback } from 'react';

import { ActionIcon, Box, Button, ColorSwatch, Group, SimpleGrid, Space, Text, Textarea, TextInput, Title, useMantineTheme } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { ContextModalProps, useModals } from '@mantine/modals';
import { ModalsContext } from '@mantine/modals/lib/context';
import { CheckIcon } from '@modulz/radix-icons';
import { RiDeleteBin2Line, RiFileAddLine, RiFileSettingsLine } from "react-icons/ri";

import { useCreateNotebook, useDeleteNotebook, useMutateNotebook } from 'hooks';
import { Notebook } from 'models';

interface DeleteModalProps {
    modals: ModalsContext;
    notebook: Notebook;
    deleteNotebook: (arg0: string) => void;
}
interface TrashNotebookProps {
    notebook: Notebook;
}
export function TrashNotebook(props: TrashNotebookProps) {
    const modals = useModals();
    const deleteNotebook = useDeleteNotebook();

    // Create a delete modal to confirm deletion of notebook
    const deleteModal = useCallback(() => openDeleteNotebookModal({
        modals: modals,
        notebook: props.notebook,
        deleteNotebook: deleteNotebook,
    }), [modals, props.notebook, deleteNotebook]);

    return <ActionIcon title="Delete Notebook" size='lg' color="dark" onClick={deleteModal}>
        <RiDeleteBin2Line size='2em' color='red' />
    </ActionIcon>;
}

/**
 * Wrapper around the Mantine DeleteModal. Handles opening the model plus the action of deleting.
 * Needs to be passed a modal context to work. 
 */
export function openDeleteNotebookModal(args: DeleteModalProps) {

    return args.modals.openConfirmModal({
        title: <Title order={4}>{`Delete ${args.notebook.title}?`}</Title>,
        labels: { confirm: 'Delete', cancel: "Cancel" },
        confirmProps: { color: 'red' },
        onConfirm: () => args.deleteNotebook(args.notebook.id),
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
}

interface SettingsNotebookProps {
    notebook: Notebook;
}

export function SettingsNotebook(props: SettingsNotebookProps) {
    const modals = useModals();

    const SettingsModal = useCallback(() => openSettingsModal({
        modals: modals,
        notebook: props.notebook,
    }), [modals, props.notebook]);

    return <ActionIcon title="Notebook Settings" size='lg' color="dark" onClick={SettingsModal}>
        <RiFileSettingsLine size='2em' />
    </ActionIcon>;
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
        }
    });
}

export const NotebookSettingsModal = (ModalProps: ContextModalProps) => {
    const { context, id, props } = ModalProps;
    const focusTrapRef = useFocusTrap();
    const theme = useMantineTheme();

    const notebook: Notebook = props.initialState.notebook;
    const updateNotebook = useMutateNotebook();

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
        updateNotebook(message);
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
            <Button type="submit" loading={loading} disabled={(title.length === 0)} onClick={submit} >
                Update
            </Button>
        </Group>
    </SimpleGrid>;
};

export function CreateNotebook() {
    const modals = useModals();

    const createNotebookModal = useCallback(() => modals.openContextModal('createNotebookModal', {
        title: 'Create Notebook',
    }), [modals]);

    return (<ActionIcon title="Create Notebook" size='lg' color="dark" onClick={createNotebookModal}>
        <RiFileAddLine size='2em' />
    </ActionIcon>
    );
}

export const CreateNotebookModal = (ModalProps: ContextModalProps) => {
    const { context, id, props } = ModalProps;
    const addNotebook = useCreateNotebook();

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

    const submit = () => {
        setLoading(true);
        const message = { title: title, description: description, color: selectedColor };
        addNotebook(message);
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
            <Button type="submit" loading={loading} disabled={(title.length === 0)} onClick={submit} >
                Submit
            </Button>
        </Group>
    </SimpleGrid>;
};