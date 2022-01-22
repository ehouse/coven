/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createNotebook = /* GraphQL */ `
  mutation CreateNotebook(
    $input: CreateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    createNotebook(input: $input, condition: $condition) {
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
export const updateNotebook = /* GraphQL */ `
  mutation UpdateNotebook(
    $input: UpdateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    updateNotebook(input: $input, condition: $condition) {
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
export const deleteNotebook = /* GraphQL */ `
  mutation DeleteNotebook(
    $input: DeleteNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    deleteNotebook(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createNoteTag = /* GraphQL */ `
  mutation CreateNoteTag(
    $input: CreateNoteTagInput!
    $condition: ModelNoteTagConditionInput
  ) {
    createNoteTag(input: $input, condition: $condition) {
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
export const updateNoteTag = /* GraphQL */ `
  mutation UpdateNoteTag(
    $input: UpdateNoteTagInput!
    $condition: ModelNoteTagConditionInput
  ) {
    updateNoteTag(input: $input, condition: $condition) {
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
export const deleteNoteTag = /* GraphQL */ `
  mutation DeleteNoteTag(
    $input: DeleteNoteTagInput!
    $condition: ModelNoteTagConditionInput
  ) {
    deleteNoteTag(input: $input, condition: $condition) {
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
export const createPageTag = /* GraphQL */ `
  mutation CreatePageTag(
    $input: CreatePageTagInput!
    $condition: ModelPageTagConditionInput
  ) {
    createPageTag(input: $input, condition: $condition) {
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
export const updatePageTag = /* GraphQL */ `
  mutation UpdatePageTag(
    $input: UpdatePageTagInput!
    $condition: ModelPageTagConditionInput
  ) {
    updatePageTag(input: $input, condition: $condition) {
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
export const deletePageTag = /* GraphQL */ `
  mutation DeletePageTag(
    $input: DeletePageTagInput!
    $condition: ModelPageTagConditionInput
  ) {
    deletePageTag(input: $input, condition: $condition) {
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
