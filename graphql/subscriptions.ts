/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
      id
      title
      noteType
      content
      hidden
      notebookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
      id
      title
      noteType
      content
      hidden
      notebookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
      id
      title
      noteType
      content
      hidden
      notebookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook($owner: String) {
    onCreateNotebook(owner: $owner) {
      id
      title
      description
      color
      Notes {
        items {
          id
          title
          noteType
          content
          hidden
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook($owner: String) {
    onUpdateNotebook(owner: $owner) {
      id
      title
      description
      color
      Notes {
        items {
          id
          title
          noteType
          content
          hidden
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook($owner: String) {
    onDeleteNotebook(owner: $owner) {
      id
      title
      description
      color
      Notes {
        items {
          id
          title
          noteType
          content
          hidden
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
