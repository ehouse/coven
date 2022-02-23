import React, { useContext, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { ActionIcon, Card, Divider, CloseButton, Group, Menu, TextInput } from '@mantine/core';
import { useDebouncedValue, useBooleanToggle } from '@mantine/hooks';
import { BoxIcon, MinusIcon, TrashIcon, SwitchIcon } from '@modulz/radix-icons';
import { RiDraftLine } from "react-icons/ri";

import RichTextEditor from 'components/RichTextEditor';
import { NoteTileContext } from 'context';
import { useDeleteNote } from 'hooks';
import { Note } from 'models';
interface Props {
    note: Note;
}

function NoteTile(props: Props) {
    const { note } = props;

    const [title, setTitle] = useState(note.title ?? '');
    const [content, setContent] = useState(note.content ?? '');
    const [minimized, setMinimized] = useState(false);
    const [simple, toggleMode] = useBooleanToggle(true);
    const { toggleVisible } = useContext(NoteTileContext);

    const deleteNote = useDeleteNote();
    const [debouncedTitle] = useDebouncedValue(title, 800);
    const [debouncedContent] = useDebouncedValue(content, 5000);

    // Mutatate title when title debounce triggers a change
    useEffect(() => {
        DataStore.query(Note, note.id).then((original) => {
            if (original) {
                const noteCopy = Note.copyOf(original, updated => {
                    updated.title = debouncedTitle;
                });
                DataStore.save(noteCopy);
            }
        });
    }, [note.id, debouncedTitle]);

    // Mutatate content when content debounce triggers a change
    useEffect(() => {
        DataStore.query(Note, note.id).then((original) => {
            if (original) {
                const noteCopy = Note.copyOf(original, updated => {
                    updated.content = debouncedContent;
                });
                DataStore.save(noteCopy);
            }
        });
    }, [note.id, debouncedContent]);

    return <Card withBorder>
        <Card.Section style={{ backgroundColor: 'ghostwhite' }}>
            <Group position='apart' direction='row'>
                <Group ml='sm' spacing='xs' align='center'>
                    <Menu control={<ActionIcon><RiDraftLine /></ActionIcon>}>
                        <Menu.Item icon={<SwitchIcon />} onClick={() => toggleMode()}>{simple ? 'Simple Editor' : 'Complex Editor'}</Menu.Item>
                        <Divider />
                        <Menu.Item color="red" icon={<TrashIcon />} onClick={() => deleteNote(note.id)}>Delete</Menu.Item>
                    </Menu>
                    <TextInput
                        size='lg'
                        variant="unstyled"
                        placeholder='Title...'
                        value={title}
                        onChange={(event) => setTitle(event.currentTarget.value)}>
                    </TextInput>
                </Group>
                <Group mr='xs' spacing={0}>
                    <ActionIcon onClick={() => setMinimized((x) => !x)}>
                        {minimized
                            ? <BoxIcon />
                            : <MinusIcon />
                        }
                    </ActionIcon>
                    <CloseButton onClick={() => toggleVisible(note.id)} />
                </Group>
            </Group>
        </Card.Section>
        <div id='RichTextEditor' style={{ display: minimized ? 'none' : 'block' }}>
            <RichTextEditor
                styles={{
                    root: { border: 0 },
                    toolbar: { display: simple ? 'none' : 'block', border: 0, padding: '1em 0 0 1em' },
                }}
                controls={[
                    ['bold', 'italic', 'underline', 'strike', 'clean'],
                    ['h1', 'h2', 'h3', 'h4'],
                    ['unorderedList', 'orderedList'],
                    ['link', 'blockquote', 'codeBlock']
                ]}
                value={content}
                onChange={setContent}
            />
        </div>
    </Card >;
}

export default NoteTile;