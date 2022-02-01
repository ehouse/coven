import { Divider, Menu, Space, Text, Title } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { ExitIcon, GearIcon, PersonIcon, TrashIcon } from '@modulz/radix-icons';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useContext } from 'react';
import { SiteStateContext } from '../context';
import * as mutations from '../graphql/mutations';
import { useRouter } from 'next/router';


function OptionsMenu() {
    const router = useRouter();

    const siteState = useContext(SiteStateContext);
    const modals = useModals();

    const deleteNotebook = async () => {
        try {
            const query = await API.graphql(graphqlOperation(mutations.deleteNotebook, { input: { id: siteState.state.activeNotebook.id } }));
            siteState.dispatch({ type: 'deleteNotebook', payload: siteState.state.activeNotebook.id });
        } catch (e) {
            console.log(`Error deleting ${siteState.state.activeNotebook.id}`, e);
        }
    };

    const openDeleteModal = () => modals.openConfirmModal({
        title: <Title order={4}>{`Delete ${siteState.state.activeNotebook.title}?`}</Title>,
        labels: { confirm: 'Delete', cancel: "Cancel" },
        confirmProps: { color: 'red' },
        onConfirm: () => deleteNotebook(),
        children: (<>
            <Text>Are you sure? This action is permanent.</Text>
            <Space h={'md'} />
            <Text>This will delete the notebook and all assiocated data along with it. Once it is deleted it is gone for good.</Text>
        </>)
    });

    return (
        <Menu placement="end">
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<GearIcon />}>Settings</Menu.Item>
            <Menu.Item icon={<PersonIcon />}>Permissions</Menu.Item>
            <Menu.Item icon={<ExitIcon />} onClick={() => Auth.signOut().then(() => router.push('/'))}>Log out</Menu.Item>

            <Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item color="red" icon={<TrashIcon />} onClick={openDeleteModal}>Delete Notebook</Menu.Item>
        </Menu >
    );
}

export default OptionsMenu;