import { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';

import { Notebook } from 'models';
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

function useCreateNotebook(args: Callbacks = {}) {
    const { success, failure } = args;
    return useCallback((notebook) => {
        const model = new Notebook(notebook);
        DataStore.save(model).then(() => {
            if (success) {
                success();
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

function useMutateNotebook(args: Callbacks = {}) {
    return useCallback((notebook) => {
        const model = new Notebook(notebook);
        DataStore.query(Notebook, notebook.id).then((original) => {
            if (original) {
                const newState = Notebook.copyOf(original, updated => {
                    updated.title = notebook.title;
                    updated.description = notebook.description;
                    updated.color = notebook.color;
                });
                console.log(newState);
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

function useNotebookState(id: string): ServerStateResponse<Notebook> {
    const initialState: ServerStateResponse<Notebook> = { isLoading: false, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Notebook>>(initialState);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Notebook, p => p.id('eq', id)).subscribe(({ items, isSynced }) => {
            if (items.length === 1) {
                setState((prev) => ({ ...prev, data: items[0], isLoading: !isSynced }));
            }
        }, (e) => {
            setState((prev) => ({ ...prev, error: e }));
        });

        return () => subscription.unsubscribe();
    }, [id]);

    return state;
}

function useNotebookListState(): ServerStateResponse<Notebook[]> {
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


export { useUserInfo, useNotebookListState, useDeleteNotebook, useCreateNotebook, useNotebookState, useMutateNotebook };
