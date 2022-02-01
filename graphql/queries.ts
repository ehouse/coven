/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRelationship = /* GraphQL */ `
  query GetRelationship($id: ID!) {
    getRelationship(id: $id) {
      id
      type
      name
      notes {
        items {
          id
          relationshipID
          noteID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notebookID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRelationships = /* GraphQL */ `
  query ListRelationships(
    $filter: ModelRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelationships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        notes {
          nextToken
        }
        notebookID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      color
      content
      Notes {
        items {
          id
          tagID
          noteID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notebookID
      createdAt
      updatedAt
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
        name
        color
        content
        Notes {
          nextToken
        }
        notebookID
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      Tags {
        items {
          id
          tagID
          noteID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      notebookID
      Relationships {
        items {
          id
          relationshipID
          noteID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        Tags {
          nextToken
        }
        notebookID
        Relationships {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNotebook = /* GraphQL */ `
  query GetNotebook($id: ID!) {
    getNotebook(id: $id) {
      id
      title
      description
      color
      editors
      readers
      Tags {
        items {
          id
          name
          color
          content
          notebookID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
          owner
        }
        nextToken
      }
      Relationships {
        items {
          id
          type
          name
          notebookID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
        editors
        readers
        Tags {
          nextToken
        }
        Notes {
          nextToken
        }
        Relationships {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNoteRelationship = /* GraphQL */ `
  query GetNoteRelationship($id: ID!) {
    getNoteRelationship(id: $id) {
      id
      relationshipID
      noteID
      relationship {
        id
        type
        name
        notes {
          nextToken
        }
        notebookID
        createdAt
        updatedAt
        owner
      }
      note {
        id
        title
        noteType
        content
        hidden
        Tags {
          nextToken
        }
        notebookID
        Relationships {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNoteRelationships = /* GraphQL */ `
  query ListNoteRelationships(
    $filter: ModelNoteRelationshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        relationshipID
        noteID
        relationship {
          id
          type
          name
          notebookID
          createdAt
          updatedAt
          owner
        }
        note {
          id
          title
          noteType
          content
          hidden
          notebookID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
        content
        Notes {
          nextToken
        }
        notebookID
        createdAt
        updatedAt
        owner
      }
      note {
        id
        title
        noteType
        content
        hidden
        Tags {
          nextToken
        }
        notebookID
        Relationships {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        tagID
        noteID
        tag {
          id
          name
          color
          content
          notebookID
          createdAt
          updatedAt
          owner
        }
        note {
          id
          title
          noteType
          content
          hidden
          notebookID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
