/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRelationship = /* GraphQL */ `
  subscription OnCreateRelationship($owner: String) {
    onCreateRelationship(owner: $owner) {
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
export const onUpdateRelationship = /* GraphQL */ `
  subscription OnUpdateRelationship($owner: String) {
    onUpdateRelationship(owner: $owner) {
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
export const onDeleteRelationship = /* GraphQL */ `
  subscription OnDeleteRelationship($owner: String) {
    onDeleteRelationship(owner: $owner) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
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
export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook($owner: String) {
    onCreateNotebook(owner: $owner) {
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
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook($owner: String) {
    onUpdateNotebook(owner: $owner) {
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
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook($owner: String) {
    onDeleteNotebook(owner: $owner) {
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
export const onCreateNoteRelationship = /* GraphQL */ `
  subscription OnCreateNoteRelationship($owner: String) {
    onCreateNoteRelationship(owner: $owner) {
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
export const onUpdateNoteRelationship = /* GraphQL */ `
  subscription OnUpdateNoteRelationship($owner: String) {
    onUpdateNoteRelationship(owner: $owner) {
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
export const onDeleteNoteRelationship = /* GraphQL */ `
  subscription OnDeleteNoteRelationship($owner: String) {
    onDeleteNoteRelationship(owner: $owner) {
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
export const onCreateNoteTag = /* GraphQL */ `
  subscription OnCreateNoteTag($owner: String) {
    onCreateNoteTag(owner: $owner) {
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
export const onUpdateNoteTag = /* GraphQL */ `
  subscription OnUpdateNoteTag($owner: String) {
    onUpdateNoteTag(owner: $owner) {
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
export const onDeleteNoteTag = /* GraphQL */ `
  subscription OnDeleteNoteTag($owner: String) {
    onDeleteNoteTag(owner: $owner) {
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
