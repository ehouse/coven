import { Divider, Menu } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { ExitIcon, GearIcon, PersonIcon, TrashIcon } from '@modulz/radix-icons';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import { Notebook } from 'API';
import { openDeleteNotebookModal, openSettingsModal } from 'components/Modals';

interface Props {
    notebook: Notebook;
    updateNotebook: (id: string, notebook: Notebook) => void;
    deleteNotebook: (id: string) => void;
}

/**
 * Wrapper component that handles creating the various modals needed for settings.
 */
function OptionsMenu(props: Props) {
    const router = useRouter();
    const modals = useModals();

    const SettingsModal = () => openSettingsModal({
        modals: modals,
        notebook: props.notebook,
        updateNotebook: props.updateNotebook
    });

    // Create a delete modal to confirm deletion of notebook
    const DeleteModal = () => openDeleteNotebookModal({
        modals: modals,
        notebook: props.notebook,
        deleteNotebook: props.deleteNotebook
    });

    return (
        <Menu placement="end">
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<GearIcon />} onClick={SettingsModal}>Settings</Menu.Item>
            <Menu.Item disabled icon={<PersonIcon />}>Permissions</Menu.Item>
            <Menu.Item icon={<ExitIcon />} onClick={() => Auth.signOut().then(() => router.push('/'))}>Log out</Menu.Item>

            <Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item color="red" icon={<TrashIcon />} onClick={DeleteModal}>
                Delete Notebook
            </Menu.Item>
        </Menu >
    );
}

export default OptionsMenu;