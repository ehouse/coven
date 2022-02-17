import React from 'react';

/**
 * Context for use with NotetTiles state. 
 * Toggle visibile needs to provided and defaults to a null function
 */
export const NoteTileContext = React.createContext({
    visibleSet: new Set<string>(),
    toggleVisible: (id: string) => { },
});