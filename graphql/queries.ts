/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotebook = /* GraphQL */ `
  query GetNotebook($id: ID!) {
    getNotebook(id: $id) {
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
          categoryNotesId
          owner
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          title
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
      category {
        items {
          id
          title
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
export const listNotebooks = /* GraphQL */ `
  query ListNotebooks(
    $filter: ModelNotebookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotebooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        color
        Notes {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        category {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotebooks = /* GraphQL */ `
  query SyncNotebooks(
    $filter: ModelNotebookFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotebooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        color
        Notes {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        category {
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
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      noteType
      content
      hidden
      notebookID
      category {
        id
        title
        notes {
          nextToken
          startedAt
        }
        notebookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tags {
        items {
          id
          noteID
          tagID
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
      categoryNotesId
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        noteType
        content
        hidden
        notebookID
        category {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryNotesId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        noteType
        content
        hidden
        notebookID
        category {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryNotesId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      title
      notes {
        items {
          id
          noteID
          tagID
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        notes {
          nextToken
          startedAt
        }
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
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notes {
          nextToken
          startedAt
        }
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      notes {
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
          categoryNotesId
          owner
        }
        nextToken
        startedAt
      }
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        notes {
          nextToken
          startedAt
        }
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
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notes {
          nextToken
          startedAt
        }
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
  }
`;
export const getNoteTag = /* GraphQL */ `
  query GetNoteTag($id: ID!) {
    getNoteTag(id: $id) {
      id
      noteID
      tagID
      note {
        id
        title
        noteType
        content
        hidden
        notebookID
        category {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryNotesId
        owner
      }
      tag {
        id
        title
        notes {
          nextToken
          startedAt
        }
        notebookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
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
export const listNoteTags = /* GraphQL */ `
  query ListNoteTags(
    $filter: ModelNoteTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        noteID
        tagID
        note {
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
          categoryNotesId
          owner
        }
        tag {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
  }
`;
export const syncNoteTags = /* GraphQL */ `
  query SyncNoteTags(
    $filter: ModelNoteTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNoteTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        noteID
        tagID
        note {
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
          categoryNotesId
          owner
        }
        tag {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
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
  }
`;
