import { useCallback, useEffect, useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';

import { Note, Category } from 'models';
import { ServerStateResponse } from 'types';


/**
 * Creates a category with Datastore and syncs
 * @returns Callback function which needs two primary keys for correct creation
 */
function useCreateCategory() {
    return useCallback((title: string, notebookID: string) => {
        // Create Category without an assiocated Note
        const model = new Category({ notebookID: notebookID, title: title });
        return DataStore.save(model);
    }, []);
}

/**
 * Delete category from Datastore and syncs
 * @returns Callback function which takes a tagID to be deleted
 */
function useDeleteCategory(categoryID: string) {
    return useCallback(() => {
        DataStore.query(Category, categoryID).then((data) => {
            if (data) {
                DataStore.delete(data);
            } else {
                throw (Error(`Entity ${categoryID} cannot be deleted: Not Found`));
            }
        });
    }, [categoryID]);
}

/**
 * Mutate the title of the Category table
 * @returns Callback function which mutates the Category
 */
function useCategoryMutate(categoryID: string) {
    return useCallback((title: string) => {
        DataStore.query(Category, categoryID).then((draft) => {
            if (draft) {
                const categoryCopy = Category.copyOf(draft, updated => {
                    updated.title = title;
                });
                DataStore.save(categoryCopy);
            } else {
                throw (Error(`Entity ${categoryID} cannot be modified: Not Found`));
            }
        });
    }, [categoryID]);
}

/**
 * Maintains the Server State and Subscription for all category's under a given notebook ID. 
 * State will always be considered fresh.
 * @param notebookID ID of notebook to query
 * @param category Filter on boolean status 
 * @returns Formatted State object containing loading, data, and errors
 */
function useCategoryListQuery(notebookID: string) {
    const initialState: ServerStateResponse<Category[]> = { isLoading: false, error: undefined, data: undefined };
    const [state, setState] = useState<ServerStateResponse<Category[]>>(initialState);

    useEffect(() => {
        if (notebookID) {
            const subscription = DataStore.observeQuery(Category, n => n.notebookID('eq', notebookID)).subscribe(({ items, isSynced }) => {
                setState((prev) => ({ ...prev, data: items, isLoading: !isSynced }));
            }, (e) => {
                setState((prev) => ({ ...prev, error: e }));
            });

            return () => subscription.unsubscribe();
        }
    }, [notebookID]);

    return state;
}

export { useCreateCategory, useDeleteCategory, useCategoryMutate, useCategoryListQuery };
