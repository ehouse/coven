export interface SiteReducerState {
    notebooks: Notebook[]
    activeNotebook: Notebook | null;
}

export type SiteReducerAction =
    | { type: 'setNotebooks', payload: Notebook[]; }
    | { type: 'createNotebook', payload: Notebook; }
    | { type: 'deleteNotebook', payload: string; }
    | { type: 'setActiveNotebook', payload: Notebook; };