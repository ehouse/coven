export interface SiteReducerState {
    activeNotebook: Notebook;
}

export type SiteReducerAction =
    { type: 'setActiveNotebook', payload: Notebook; };