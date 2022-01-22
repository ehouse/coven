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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
