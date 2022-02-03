import { useDebouncedValue } from '@mantine/hooks';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useCallback, useEffect, useState } from 'react';
import { GetNoteQuery } from "../API";
import * as queries from '../graphql/queries';
import RichTextEditor from './RichTextEditor';
interface Props {
    nbid: string;
    nid: string;
    isFocused: boolean;
}

interface TextNote {
    body: string;
}

function Note(props: Props) {
    const [loading, setLoading] = useState(true);
    const [syncing, setSyncing] = useState(false);
    const [value, setBody] = useState('');
    const [debounced] = useDebouncedValue(value, 1000);

    const syncNote = useCallback(() => {

    }, []);

    const fetchNote = useCallback(() => {
        const query = API.graphql(graphqlOperation(queries.getNote, { id: props.nid })) as Promise<{ data: GetNoteQuery; }>;

        query.then((result) => {
            // Ugly hack until they fix this
            // https://github.com/aws-amplify/amplify-js/issues/6369
            const results = result.data.getNote;
            const json: TextNote = JSON.parse(results?.content!);
            setBody(json.body);
            setLoading(false);
        }).catch((e) => {
            console.log("Error when collecting Notes", e);
            setLoading(false);
        });
    }, [props.nid]);

    useEffect(() => {
        syncNote();
    }, [debounced, syncNote]);

    useEffect(() => {
        fetchNote();
    }, [fetchNote]);

    return <div>
        <RichTextEditor
            readOnly={!props.isFocused}
            controls={[
                ['bold', 'italic', 'underline', 'strike', 'clean'],
                ['h1', 'h2', 'h3', 'h4'],
                ['unorderedList', 'orderedList'],
                ['link', 'image', 'blockquote', 'codeBlock']
            ]}
            value={value}
            onChange={setBody} />
    </div>;
}

export default Note;