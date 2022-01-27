import { useState } from 'react';
import { Modal, Button, Group, TextInput, Textarea } from '@mantine/core';

interface Props {
    opened: boolean;
    setOpened: (arg0: boolean) => void;
}

function CreateNotebook(props: Props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    return (
        <Modal
            opened={props.opened}
            onClose={() => props.setOpened(false)}
            title="Create Notebook"
        >
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
            <Button type="submit" disabled={title.length === 0} >
                Create
            </Button>
        </Modal>
    );
}

export default CreateNotebook;