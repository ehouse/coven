/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      color
      Notes {
        items {
          id
          tagID
          noteID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Pages {
        items {
          id
          tagID
          pageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        name
        color
        Notes {
          nextToken
          startedAt
        }
        Pages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        name
        color
        Notes {
          nextToken
          startedAt
        }
        Pages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      body
      pageID
      Tags {
        items {
          id
          tagID
          noteID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        body
        pageID
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        body
        pageID
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNotebook = /* GraphQL */ `
  query GetNotebook($id: ID!) {
    getNotebook(id: $id) {
      id
      title
      Pages {
        items {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        Pages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        Pages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      title
      notebookID
      Notes {
        items {
          id
          title
          body
          pageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Tags {
        items {
          id
          tagID
          pageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        notebookID
        Notes {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPages = /* GraphQL */ `
  query SyncPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        notebookID
        Notes {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      tagID
      noteID
      tag {
        id
        name
        color
        Notes {
          nextToken
          startedAt
        }
        Pages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note {
        id
        title
        body
        pageID
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        tagID
        noteID
        tag {
          id
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        note {
          id
          title
          body
          pageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        tagID
        noteID
        tag {
          id
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        note {
          id
          title
          body
          pageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPageTag = /* GraphQL */ `
  query GetPageTag($id: ID!) {
    getPageTag(id: $id) {
      id
      tagID
      pageID
      tag {
        id
        name
        color
        Notes {
          nextToken
          startedAt
        }
        Pages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      page {
        id
        title
        notebookID
        Notes {
          nextToken
          startedAt
        }
        Tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPageTags = /* GraphQL */ `
  query ListPageTags(
    $filter: ModelPageTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagID
        pageID
        tag {
          id
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        page {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPageTags = /* GraphQL */ `
  query SyncPageTags(
    $filter: ModelPageTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPageTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagID
        pageID
        tag {
          id
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        page {
          id
          title
          notebookID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
