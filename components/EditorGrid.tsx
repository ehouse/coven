import react from 'react';

import {
    Grid,
    AppShell,
    Button,
    Divider,
    Group,
    Navbar,
    ScrollArea,
    Text,
    ThemeIcon,
    Title,
    useMantineTheme
} from '@mantine/core';

import NoteTile from 'components/NoteTile';
import { Notebook, Note, NoteType } from 'models';


interface Props {
    notebookID: string;
    notes?: Note[];
}

function EditorGrid(props: Props) {
    const { notes } = props;

    return <Grid>
        {notes && notes.map((note) => {
            return <Grid.Col key={note.id} span={6}>
                <NoteTile notebookID={props.notebookID} note={note} />
            </Grid.Col>;
        })}
    </Grid>;
}

export default EditorGrid;