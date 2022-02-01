import RichTextEditor from './RichTextEditor';
import React, { useState } from 'react';

interface Props {
    nid: string;
    isFocused: boolean;
    initialState: string;
}

function Note(props: Props) {
    const [value, onChange] = useState(props.initialState);

    if (!props.isFocused) {
        return <div>
            <RichTextEditor readOnly={!props.isFocused} value={value} onChange={onChange} />
        </div>;
    }

    return <div>
        <RichTextEditor value={value} onChange={onChange} />
    </div>;
}

export default Note;