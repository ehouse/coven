import { Badge, Button, ColorPicker, Group, SimpleGrid, Text, useMantineTheme, Textarea, TextInput } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { ContextModalProps } from '@mantine/modals';
import { API, graphqlOperation } from 'aws-amplify';
import React from 'react';
import { CreateNotebookMutation } from "../API";
import * as mutations from '../graphql/mutations';


export const CreateNotebookModal = ({ context, id, props }: ContextModalProps) => {
    const theme = useMantineTheme();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [color, setColor] = React.useState('#339af0');
    const focusTrapRef = useFocusTrap();

    const submit = async () => {
        setLoading(true);
        const message = { title: title, description: description, color: color };
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
        <Text>
            Notebook Color:
            <Badge ml='sm' sx={{ backgroundColor: color, color: 'white' }}>{color}</Badge>
        </Text>
        <ColorPicker
            mb='md'
            format="hex"
            swatches={['#339af0', '#22b8cf', '#51cf66', '#fcc419', '#ff922b', '#f03e3e', '#f06595', '#c2255c', '#101113', '#adb5bd']}
            size='lg'
            withPicker={false}
            value={color}
            onChange={setColor}
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