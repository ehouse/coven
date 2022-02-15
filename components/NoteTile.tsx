import React, { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Card, Title, Text, CloseButton, TextInput, Badge, Button, Group, useMantineTheme, ActionIcon } from '@mantine/core';
import { useIdle, useDebouncedValue } from '@mantine/hooks';
import { GearIcon } from '@modulz/radix-icons';
import { API, graphqlOperation } from 'aws-amplify';

import RichTextEditor from 'components/RichTextEditor';
import { Notebook, Note, NoteType } from 'models';

interface Props {
    notebookID: string;
    note: Note;
}

function NoteTile(props: Props) {
    const { note, notebookID } = props;
    const noteID = note;

    const [content, setContent] = useState(note.content ?? '');
    const [title, setTitle] = useState(note.title ?? '');
    const [focused, setFocused] = useState(true);

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
                {focused
                    ? <TextInput ml='sm' variant="unstyled" placeholder='Title...' size='lg' value={title} onChange={(event) => setTitle(event.currentTarget.value)}></TextInput>
                    : <Title order={3} my='md'>{title}</Title>
                }
                <CloseButton />
            </Group>
        </Card.Section>
        <RichTextEditor
            styles={{
                root: { border: 0 },
                toolbar: { border: 0, padding: '6px 0px' },
            }}
            controls={[
                ['bold', 'italic', 'underline', 'strike', 'clean'],
                ['h1', 'h2', 'h3', 'h4'],
                ['unorderedList', 'orderedList'],
                ['link', 'blockquote', 'codeBlock']
            ]}
            value={content}
            readOnly={!focused}
            onChange={setContent} />
    </Card>;
}

export default NoteTile;