import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

interface Props {
    opened: boolean;
    setOpened: (arg0: boolean) => void;
}

function CreateNotebook(props: Props) {
    return (
        <Modal
            opened={props.opened}
            onClose={() => props.setOpened(false)}
            title="Create Notebook"
        >
            This is the Create Notebook Model
        </Modal>

    );
}

export default CreateNotebook;