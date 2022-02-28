import { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';

import { Category, Note, NoteType } from 'models';
import { ServerStateResponse } from 'types';


/**
 * Handles data syncing for Notes through the Datastore API
 * @param noteID NoteID to be kept in sync
 * @param title title value
 * @param content content value
 */
function useNoteSync(noteID: string, title: string, content: string) {
    useEffect(() => {
        DataStore.query(Note, noteID).then((draft) => {
            if (draft) {
                const noteCopy = Note.copyOf(draft, updated => {
                    updated.title = title;
                    updated.content = content;
                });
                DataStore.save(noteCopy);
            } else {
                throw (Error(`Entity ${noteID} cannot be modified: Not Found`));
            }
        });
    }, [noteID, title, content]);
}

function useMoveNoteCategory(noteID: string) {
    return useCallback(async (newCategoryID: string) => {
        const note = await DataStore.query(Note, noteID);
        const newCategory = await DataStore.query(Category, newCategoryID);

        if (note) {
            const noteCopy = Note.copyOf(note, updated => {
                updated.categoryID = newCategory?.id;
            });
            DataStore.save(noteCopy);
        } else {
            throw (Error(`Entity ${noteID} cannot be modified: Not Found`));
        }

    }, [noteID]);
}

/**
 * Handles Note deletion via Datastore API
 * @returns Delete Note callback with Note ID argument
 */
function useDeleteNote() {
    return useCallback((noteID: string) => {
        DataStore.query(Note, noteID).then((data) => {
            if (data) {
                DataStore.delete(data);
            } else {
                throw (Error(`Entity ${noteID} cannot be deleted: Not Found`));
            }
        });
    }, []);
}

/**
 * Handles Note deletion via Datastore API
 * @returns Create Note callback with Notebook ID argument
 */
function useCreateNote() {
    return useCallback((notebookID: string) => {
        const model = new Note({ 'noteType': NoteType.TEXT, 'notebookID': notebookID });
        DataStore.save(model);
    }, []);
}

/**
 * Maintains the Server State and Subscription for all notes under a given notebook ID. 
 * State will always be considered fresh.
 * @param notebookID ID of notebook to query
 * @returns Formatted State object containing loading, data, and errors
 */
function useNoteListQuery(notebookID: string) {
    const initialState: ServerStateResponse<Note[]> = { isLoading: false, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Note[]>>(initialState);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Note, n => n.notebookID('eq', notebookID)).subscribe(({ items, isSynced }) => {
            setState((prev) => ({ ...prev, data: items, isLoading: !isSynced }));
        }, (e) => {
            setState((prev) => ({ ...prev, error: e }));
        });

        return () => subscription.unsubscribe();
    }, [notebookID]);

    return state;
}

export { useDeleteNote, useCreateNote, useMoveNoteCategory, useNoteSync, useNoteListQuery };
