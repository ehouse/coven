import React from 'react';
import type { Notebook } from './API';
import type { SiteReducerAction, SiteReducerState } from './types';

interface SiteContextType {
    state: SiteReducerState;
    dispatch: React.Dispatch<SiteReducerAction>;
}

const initialContextState = {
    notebooks: [] as Notebook[],
    activeNotebook: null
};

const initialState = {
    state: initialContextState,
    dispatch: () => null
};

export const SiteStateContext = React.createContext<SiteContextType>(initialState);