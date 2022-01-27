/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRelationship = /* GraphQL */ `
  subscription OnCreateRelationship {
    onCreateRelationship {
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
          _version
          _deleted
          _lastChangedAt
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
    }
  }
`;
export const onUpdateRelationship = /* GraphQL */ `
  subscription OnUpdateRelationship {
    onUpdateRelationship {
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
          _version
          _deleted
          _lastChangedAt
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
    }
  }
`;
export const onDeleteRelationship = /* GraphQL */ `
  subscription OnDeleteRelationship {
    onDeleteRelationship {
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
          _version
          _deleted
          _lastChangedAt
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
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
          _version
          _deleted
          _lastChangedAt
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
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
          _version
          _deleted
          _lastChangedAt
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
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
          _version
          _deleted
          _lastChangedAt
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
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      title
      content
      hidden
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
      notebookID
      Relationships {
        items {
          id
          relationshipID
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      title
      content
      hidden
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
      notebookID
      Relationships {
        items {
          id
          relationshipID
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      title
      content
      hidden
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
      notebookID
      Relationships {
        items {
          id
          relationshipID
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
export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook {
    onCreateNotebook {
      id
      title
      description
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Notes {
        items {
          id
          title
          content
          hidden
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
      Relationships {
        items {
          id
          type
          name
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
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook {
    onUpdateNotebook {
      id
      title
      description
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Notes {
        items {
          id
          title
          content
          hidden
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
      Relationships {
        items {
          id
          type
          name
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
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook {
    onDeleteNotebook {
      id
      title
      description
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Notes {
        items {
          id
          title
          content
          hidden
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
      Relationships {
        items {
          id
          type
          name
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
export const onCreateNoteRelationship = /* GraphQL */ `
  subscription OnCreateNoteRelationship {
    onCreateNoteRelationship {
      id
      relationshipID
      noteID
      relationship {
        id
        type
        name
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
      }
      note {
        id
        title
        content
        hidden
        Tags {
          nextToken
          startedAt
        }
        notebookID
        Relationships {
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
export const onUpdateNoteRelationship = /* GraphQL */ `
  subscription OnUpdateNoteRelationship {
    onUpdateNoteRelationship {
      id
      relationshipID
      noteID
      relationship {
        id
        type
        name
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
      }
      note {
        id
        title
        content
        hidden
        Tags {
          nextToken
          startedAt
        }
        notebookID
        Relationships {
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
export const onDeleteNoteRelationship = /* GraphQL */ `
  subscription OnDeleteNoteRelationship {
    onDeleteNoteRelationship {
      id
      relationshipID
      noteID
      relationship {
        id
        type
        name
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
      }
      note {
        id
        title
        content
        hidden
        Tags {
          nextToken
          startedAt
        }
        notebookID
        Relationships {
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
export const onCreateNoteTag = /* GraphQL */ `
  subscription OnCreateNoteTag {
    onCreateNoteTag {
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
          startedAt
        }
        notebookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note {
        id
        title
        content
        hidden
        Tags {
          nextToken
          startedAt
        }
        notebookID
        Relationships {
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
export const onUpdateNoteTag = /* GraphQL */ `
  subscription OnUpdateNoteTag {
    onUpdateNoteTag {
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
          startedAt
        }
        notebookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note {
        id
        title
        content
        hidden
        Tags {
          nextToken
          startedAt
        }
        notebookID
        Relationships {
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
export const onDeleteNoteTag = /* GraphQL */ `
  subscription OnDeleteNoteTag {
    onDeleteNoteTag {
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
          startedAt
        }
        notebookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note {
        id
        title
        content
        hidden
        Tags {
          nextToken
          startedAt
        }
        notebookID
        Relationships {
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
