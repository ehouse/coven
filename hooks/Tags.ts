import { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';

import { Note, Tag, NoteTag } from 'models';
import { ServerStateResponse } from 'types';


/**
 * Creates a tag with Datastore and syncs
 * @returns Callback function which needs two primary keys for correct creation
 */
function useCreateTag() {
    return useCallback(async (title: string, category: boolean, notebookID?: string, noteID?: string) => {
        // Return early if Notebook is undefined
        if (typeof notebookID === 'undefined') {
            return;
        }

        // Create Tag without an assiocated Note
        const model = new Tag({ notebookID: notebookID, title: title });
        const tag = await DataStore.save(model);
        console.log("Awaiting tag", tag);

        if (noteID) {
            const note = await DataStore.query(Note, noteID);
            console.log("Awaiting note", note);
            if (note && tag) {
                const notetag = await DataStore.save(new NoteTag({ note: note, tag: tag }));
                console.log("Saving Datastore NoteTag", notetag);
            }
        }
    }, []);
}

/**
 * Delete tag from Datastore and syncs
 * @returns Callback function which takes a tagID to be deleted
 */
function useDeleteTag() {
    return useCallback((tagID: string) => {
        DataStore.query(Tag, tagID).then((data) => {
            if (data) {
                DataStore.delete(data);
            } else {
                throw (Error(`Entity ${tagID} cannot be deleted: Not Found`));
            }
        });
    }, []);
}

/**
 * Maintains the Server State and Subscription for all notes under a given notebook ID. 
 * State will always be considered fresh.
 * @param notebookID ID of notebook to query
 * @param category Filter on boolean status 
 * @returns Formatted State object containing loading, data, and errors
 */
function useTagListQuery(notebookID: string, filter?: { category?: boolean; }) {
    const initialState: ServerStateResponse<Tag[]> = { isLoading: false, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Tag[]>>(initialState);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Tag, n => n.notebookID('eq', notebookID)).subscribe(({ items, isSynced }) => {
            setState((prev) => ({ ...prev, data: items, isLoading: !isSynced }));
        }, (e) => {
            setState((prev) => ({ ...prev, error: e }));
        });

        return () => subscription.unsubscribe();
    }, [notebookID]);

    return state;
}

export { useCreateTag, useDeleteTag, useTagListQuery };
