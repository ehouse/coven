import type { GraphQLResult } from '@aws-amplify/api-graphql';
export interface NotebooksData {
    [UUID: string]: Notebook;
}

export type GraphQLResult<T> = Promise<GraphQLResult<T>>

export interface SidebarState {
    notebooks: SidebarNotebooks;
    activeID: string;
}

export type SidebarReducerAction =
    | { type: 'addNotebook', payload: Notebook; }
    | { type: 'deleteNotebook', payload: string; }
    | { type: 'updateNotebook', payload: {id: string, notebook: Notebook}}
    | { type: 'setNotebooks', payload: SidebarNotebooks; }
    | { type: 'setActiveID', payload: string; };