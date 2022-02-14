import { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';

import { Notebook, Note, NoteType } from 'models';
import { ServerStateResponse, UserInfo } from 'types';

interface Callbacks {
    success?: () => void;
    failure?: (arg0: Error) => void;
}

function useUserInfo() {
    const [userInfo, setUserInfo] = useState<UserInfo>();

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(({ username, attributes }) => {
            if (username && attributes.email) {
                setUserInfo({ username: username, email: attributes.email });
            }
        });
    }, []);

    return userInfo;
}

function useDeleteNote() {
    return useCallback((id: string) => {
        DataStore.query(Note, id).then((data) => {
            if (data) {
                DataStore.delete(data);
            } else {
                throw (Error(`Entity ${id} cannot be deleted: Not Found`));
            }
        });
    }, []);
}

function useCreateNote() {
    return useCallback((id: string) => {
        const model = new Note({ 'noteType': NoteType.TEXT, 'notebookID': id });
        DataStore.save(model);
    }, []);
}

function useMutateNote() {

}

function useNoteListQuery(id?: string) {
    const initialState: ServerStateResponse<Note[]> = { isLoading: false, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Note[]>>(initialState);

    useEffect(() => {
        if (id) {
            const subscription = DataStore.observeQuery(Note, n => n.notebookID('eq', id)).subscribe(({ items, isSynced }) => {
                setState((prev) => ({ ...prev, data: items, isLoading: !isSynced }));
            }, (e) => {
                setState((prev) => ({ ...prev, error: e }));
            });

            return () => subscription.unsubscribe();
        }
    }, [id]);

    return state;
}

/**
 * A callback function that will generate a new Notebook with a given set of inputs
 * @returns Callback to be called with Notebook values when creating a new Notebook
 */
function useCreateNotebook() {
    return useCallback((notebook) => {
        const model = new Notebook(notebook);
        DataStore.save(model);
    }, []);
}

function useMutateNotebook() {
    return useCallback((notebook) => {
        const model = new Notebook(notebook);
        DataStore.query(Notebook, notebook.id).then((original) => {
            if (original) {
                const newState = Notebook.copyOf(original, updated => {
                    updated.title = notebook.title;
                    updated.description = notebook.description;
                    updated.color = notebook.color;
                });
                DataStore.save(newState);
            } else {
                throw (Error(`Entity ${notebook.id} does not exist.`));
            }
        });
    }, []);
}

/**
 * Creates a callback function that when called will delete the notebook from the datastore
 * @param id Id of notebook to be deleted in callback
 * @returns 
 */
function useDeleteNotebook(args: Callbacks = {}) {
    const { success, failure } = args;

    return useCallback((id: string) => {
        DataStore.query(Notebook, id).then((data) => {
            if (data) {
                DataStore.delete(data);
                if (success) {
                    success();
                }
            } else {
                if (failure) {
                    failure(Error('Notebook note found, cannot delete'));
                } else {
                    throw Error('Notebook note found, cannot delete');
                }
            }
        }).catch((e) => {
            if (failure) {
                failure(e);
            } else {
                throw e;
            }
        });
    }, [success, failure]);
}

function useNotebookQuery(id?: string): ServerStateResponse<Notebook> {
    const initialState: ServerStateResponse<Notebook> = { isLoading: false, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Notebook>>(initialState);

    useEffect(() => {
        if (id) {
            const subscription = DataStore.observeQuery(Notebook, p => p.id('eq', id)).subscribe(({ items, isSynced }) => {
                if (items.length === 1) {
                    setState((prev) => ({ ...prev, data: items[0], isLoading: !isSynced }));
                }
            }, (e) => {
                setState((prev) => ({ ...prev, error: e }));
            });

            return () => subscription.unsubscribe();
        }
    }, [id]);

    return state;
}

function useNotebookListQuery(): ServerStateResponse<Notebook[]> {
    const initialState: ServerStateResponse<Notebook[]> = { isLoading: true, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Notebook[]>>(initialState);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Notebook).subscribe(({ items, isSynced }) => {
            console.log("setting state", items);
            setState((prev) => ({ ...prev, data: items, isLoading: !isSynced }));
        }, (e) => {
            setState((prev) => ({ ...prev, error: e }));
        });

        return () => subscription.unsubscribe();
    }, []);

    return state;
}


export {
    useUserInfo,
    useCreateNote,
    useDeleteNote,
    useMutateNote,
    useNoteListQuery,
    useNotebookListQuery,
    useDeleteNotebook,
    useCreateNotebook,
    useNotebookQuery,
    useMutateNotebook
};
