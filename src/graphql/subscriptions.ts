/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
export const onCreateNotebook = /* GraphQL */ `
  subscription OnCreateNotebook {
    onCreateNotebook {
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
export const onUpdateNotebook = /* GraphQL */ `
  subscription OnUpdateNotebook {
    onUpdateNotebook {
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
export const onDeleteNotebook = /* GraphQL */ `
  subscription OnDeleteNotebook {
    onDeleteNotebook {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
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
export const onCreatePageTag = /* GraphQL */ `
  subscription OnCreatePageTag {
    onCreatePageTag {
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
export const onUpdatePageTag = /* GraphQL */ `
  subscription OnUpdatePageTag {
    onUpdatePageTag {
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
export const onDeletePageTag = /* GraphQL */ `
  subscription OnDeletePageTag {
    onDeletePageTag {
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
