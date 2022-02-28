import { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';

import { Notebook } from 'models';
import { ServerStateResponse } from 'types';


interface Callbacks {
    success?: () => void;
    failure?: (arg0: Error) => void;
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

/**
 * Creates a callback to be used for mutating Notebook state
 * @returns notebook mutation callback
 */
function useMutateNotebook() {
    return useCallback((notebook) => {
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

/**
 * Maintains the Server State and Subscription for a single Notebook by ID. 
 * State will always be considered fresh.
 * @param id ID of notebook to query
 * @returns Formatted State object containing loading, data, and errors
 */
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

/**
 * Maintains the Server State and Subscription for all notesbooks a user owns
 * State will always be considered fresh.
 * @returns Formatted State object containing loading, data, and errors
 */
function useNotebookListQuery(): ServerStateResponse<Notebook[]> {
    const initialState: ServerStateResponse<Notebook[]> = { isLoading: true, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Notebook[]>>(initialState);

    useEffect(() => {
        const subscription = DataStore.observeQuery(Notebook).subscribe(({ items, isSynced }) => {
            setState((prev) => ({ ...prev, data: items, isLoading: !isSynced }));
        }, (e) => {
            setState((prev) => ({ ...prev, error: e }));
        });

        return () => subscription.unsubscribe();
    }, []);

    return state;
}

export { useNotebookListQuery, useNotebookQuery, useCreateNotebook, useDeleteNotebook, useMutateNotebook };
