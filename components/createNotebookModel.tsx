import { useState } from 'react';
import { Modal, Button, SimpleGrid, TextInput, Textarea } from '@mantine/core';

interface Props {
    opened: boolean;
    setOpened: (arg0: boolean) => void;
}

function CreateNotebookModel(props: Props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function createNotebook(){

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
                <Button type="submit" disabled={title.length === 0} onClick={createNotebook} >
                    Create
                </Button>
            </SimpleGrid>
        </Modal>
    );
}

export default CreateNotebookModel;