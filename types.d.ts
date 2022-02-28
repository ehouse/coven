export interface NotebooksData {
    [UUID: string]: Notebook;
}
export interface ServerStateResponse<T> {
    isLoading: boolean;
    data?: T;
    error?: Error;
}

export type ServerResponse =
    | { status: 'success'; }
    | { status: 'error', error: Error; };

export type PostResponse<T> =
    | { success: true, data: T; }
    | { success: false, error: Error; };