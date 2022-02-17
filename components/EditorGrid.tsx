import react, { useContext, useState } from 'react';

import {
    Affix,
    ScrollArea,
    Button,
    Divider,
    Group,
    Paper,
    Text,
    ThemeIcon,
    Title,
    useMantineTheme,
    ActionIcon
} from '@mantine/core';
import { GridIcon, ViewHorizontalIcon, ViewVerticalIcon } from '@modulz/radix-icons';

import NoteTile from 'components/NoteTile';
import { NoteTileContext } from 'context';
import { Notebook, Note, NoteType } from 'models';


interface Props {
    notes?: Note[];
}

type Flow = 'column' | 'split' | 'grid' | 'graph';

/**
 * Sets flow css styles based on a given flow style
 * @param flow Page flow style to select 
 * @returns 
 */
const flowStyle = (flow: Flow) => {
    switch (flow) {
        case 'column':
            return { display: 'grid' };
        case 'split':
            return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'masonry' };
        case 'grid':
            return { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'masonry' };
    }
};

function EditorGrid(props: Props) {
    const [flow, setFlow] = useState<Flow>('column');
    const { notes } = props;

    // Context for stateful data for individual tiles
    const TileContext = useContext(NoteTileContext);

    return (<>
        <Affix position={{ bottom: 10, right: 20 }}>
            <Paper withBorder shadow='sm' padding='xs'>
                <Group spacing={2}>
                    <ActionIcon
                        title='Set Column Orientation'
                        variant={flow === 'column' ? 'filled' : 'hover'}
                        onClick={() => setFlow('column')}
                    >
                        <ViewHorizontalIcon />
                    </ActionIcon>
                    <ActionIcon
                        title='Set Split Orientation'
                        variant={flow === 'split' ? 'filled' : 'hover'}
                        onClick={() => setFlow('split')}
                    >
                        <ViewVerticalIcon />
                    </ActionIcon>
                    <ActionIcon
                        title='Set Grid Orientation'
                        variant={flow === 'grid' ? 'filled' : 'hover'}
                        onClick={() => setFlow('grid')}
                    >
                        <GridIcon />
                    </ActionIcon>
                </Group>
            </Paper>
        </Affix>
        <div id='FlexContainer' style={flowStyle(flow)}>
            {notes && notes.map((note) => {
                if (TileContext.visibleSet.has(note.id)) {
                    return <NoteTile key={note.id} note={note} />;
                }
            })}
        </div>
    </>);
}

export default EditorGrid;