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
        }
        nextToken
      }
      Pages {
        items {
          id
          tagID
          pageID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        Pages {
          nextToken
        }
        createdAt
        updatedAt
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
      body
      parent {
        id
        title
        body
        parent {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        children {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        pageID
        Tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      children {
        id
        title
        body
        parent {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        children {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        pageID
        Tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      pageID
      Tags {
        items {
          id
          tagID
          noteID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        parent {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        children {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        pageID
        Tags {
          nextToken
        }
        createdAt
        updatedAt
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
      Pages {
        items {
          id
          title
          notebookID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        nextToken
      }
      Tags {
        items {
          id
          tagID
          pageID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        Tags {
          nextToken
        }
        createdAt
        updatedAt
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
        Notes {
          nextToken
        }
        Pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      note {
        id
        title
        body
        parent {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        children {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        pageID
        Tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        note {
          id
          title
          body
          pageID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        Pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      page {
        id
        title
        notebookID
        Notes {
          nextToken
        }
        Tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        page {
          id
          title
          notebookID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
