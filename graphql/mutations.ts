/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRelationship = /* GraphQL */ `
  mutation CreateRelationship(
    $input: CreateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    createRelationship(input: $input, condition: $condition) {
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
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship(
    $input: UpdateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    updateRelationship(input: $input, condition: $condition) {
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
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship(
    $input: DeleteRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    deleteRelationship(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createNotebook = /* GraphQL */ `
  mutation CreateNotebook(
    $input: CreateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    createNotebook(input: $input, condition: $condition) {
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
export const updateNotebook = /* GraphQL */ `
  mutation UpdateNotebook(
    $input: UpdateNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    updateNotebook(input: $input, condition: $condition) {
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
export const deleteNotebook = /* GraphQL */ `
  mutation DeleteNotebook(
    $input: DeleteNotebookInput!
    $condition: ModelNotebookConditionInput
  ) {
    deleteNotebook(input: $input, condition: $condition) {
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
export const createNoteRelationship = /* GraphQL */ `
  mutation CreateNoteRelationship(
    $input: CreateNoteRelationshipInput!
    $condition: ModelNoteRelationshipConditionInput
  ) {
    createNoteRelationship(input: $input, condition: $condition) {
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
export const updateNoteRelationship = /* GraphQL */ `
  mutation UpdateNoteRelationship(
    $input: UpdateNoteRelationshipInput!
    $condition: ModelNoteRelationshipConditionInput
  ) {
    updateNoteRelationship(input: $input, condition: $condition) {
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
export const deleteNoteRelationship = /* GraphQL */ `
  mutation DeleteNoteRelationship(
    $input: DeleteNoteRelationshipInput!
    $condition: ModelNoteRelationshipConditionInput
  ) {
    deleteNoteRelationship(input: $input, condition: $condition) {
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
