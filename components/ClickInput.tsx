import React, { useState } from 'react';

import { Box, Text, TextInput } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';


interface Props {
    value: string;
    placeholder?: string;
    active?: boolean;
    callBack: (state: string) => void;
}

function ClickInput(props: Props) {
    const [state, setState] = useState(props.value);
    const [isEdit, setEdit] = useState(false);

    const clickAwayRef = useClickOutside(() => {
        setEdit(false);
        props.callBack(state);
    });
    return <Box
        onClick={(event: React.MouseEvent<HTMLElement>) => { if (event.detail >= 2) setEdit(true); }}
        style={{ cursor: 'pointer' }}
    >
        {(isEdit || props.active)
            ? <TextInput
                ref={clickAwayRef}
                value={state}
                autoFocus
                placeholder={props.placeholder}
                variant="unstyled"
                sx={(theme) => ({
                    input: {
                        fontSize: '20px'
                    }
                })}
                onChange={(event) => setState(event.currentTarget.value)}
            />
            : state.length === 0
                ? <Text color='gray' size='xl'>{props.placeholder}</Text>
                : <Text size='xl'>{state}</Text>
        }
    </Box>;
}

export default ClickInput;