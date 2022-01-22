/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTagInput = {
  id?: string | null,
  name: string,
  color?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  color?: string | null,
  Notes?: ModelNoteTagConnection | null,
  Pages?: ModelPageTagConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNoteTagConnection = {
  __typename: "ModelNoteTagConnection",
  items:  Array<NoteTag | null >,
  nextToken?: string | null,
};

export type NoteTag = {
  __typename: "NoteTag",
  id: string,
  tagID: string,
  noteID: string,
  tag: Tag,
  note: Note,
  createdAt: string,
  updatedAt: string,
};

export type Note = {
  __typename: "Note",
  id: string,
  title?: string | null,
  body: string,
  parent?:  Array<Note | null > | null,
  children?:  Array<Note | null > | null,
  pageID?: string | null,
  Tags?: ModelNoteTagConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPageTagConnection = {
  __typename: "ModelPageTagConnection",
  items:  Array<PageTag | null >,
  nextToken?: string | null,
};

export type PageTag = {
  __typename: "PageTag",
  id: string,
  tagID: string,
  pageID: string,
  tag: Tag,
  page: Page,
  createdAt: string,
  updatedAt: string,
};

export type Page = {
  __typename: "Page",
  id: string,
  title: string,
  notebookID?: string | null,
  Notes?: ModelNoteConnection | null,
  Tags?: ModelPageTagConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  color?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  title?: string | null,
  body: string,
  pageID?: string | null,
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNoteInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  pageID?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateNotebookInput = {
  id?: string | null,
  title: string,
};

export type ModelNotebookConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelNotebookConditionInput | null > | null,
  or?: Array< ModelNotebookConditionInput | null > | null,
  not?: ModelNotebookConditionInput | null,
};

export type Notebook = {
  __typename: "Notebook",
  id: string,
  title: string,
  Pages?: ModelPageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
};

export type UpdateNotebookInput = {
  id: string,
  title?: string | null,
};

export type DeleteNotebookInput = {
  id: string,
};

export type CreatePageInput = {
  id?: string | null,
  title: string,
  notebookID?: string | null,
};

export type ModelPageConditionInput = {
  title?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
};

export type UpdatePageInput = {
  id: string,
  title?: string | null,
  notebookID?: string | null,
};

export type DeletePageInput = {
  id: string,
};

export type CreateNoteTagInput = {
  id?: string | null,
  tagID: string,
  noteID: string,
};

export type ModelNoteTagConditionInput = {
  tagID?: ModelIDInput | null,
  noteID?: ModelIDInput | null,
  and?: Array< ModelNoteTagConditionInput | null > | null,
  or?: Array< ModelNoteTagConditionInput | null > | null,
  not?: ModelNoteTagConditionInput | null,
};

export type UpdateNoteTagInput = {
  id: string,
  tagID?: string | null,
  noteID?: string | null,
};

export type DeleteNoteTagInput = {
  id: string,
};

export type CreatePageTagInput = {
  id?: string | null,
  tagID: string,
  pageID: string,
};

export type ModelPageTagConditionInput = {
  tagID?: ModelIDInput | null,
  pageID?: ModelIDInput | null,
  and?: Array< ModelPageTagConditionInput | null > | null,
  or?: Array< ModelPageTagConditionInput | null > | null,
  not?: ModelPageTagConditionInput | null,
};

export type UpdatePageTagInput = {
  id: string,
  tagID?: string | null,
  pageID?: string | null,
};

export type DeletePageTagInput = {
  id: string,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  pageID?: ModelIDInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNotebookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelNotebookFilterInput | null > | null,
  or?: Array< ModelNotebookFilterInput | null > | null,
  not?: ModelNotebookFilterInput | null,
};

export type ModelNotebookConnection = {
  __typename: "ModelNotebookConnection",
  items:  Array<Notebook | null >,
  nextToken?: string | null,
};

export type ModelPageFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
};

export type ModelNoteTagFilterInput = {
  id?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  noteID?: ModelIDInput | null,
  and?: Array< ModelNoteTagFilterInput | null > | null,
  or?: Array< ModelNoteTagFilterInput | null > | null,
  not?: ModelNoteTagFilterInput | null,
};

export type ModelPageTagFilterInput = {
  id?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  pageID?: ModelIDInput | null,
  and?: Array< ModelPageTagFilterInput | null > | null,
  or?: Array< ModelPageTagFilterInput | null > | null,
  not?: ModelPageTagFilterInput | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotebookMutationVariables = {
  input: CreateNotebookInput,
  condition?: ModelNotebookConditionInput | null,
};

export type CreateNotebookMutation = {
  createNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotebookMutationVariables = {
  input: UpdateNotebookInput,
  condition?: ModelNotebookConditionInput | null,
};

export type UpdateNotebookMutation = {
  updateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotebookMutationVariables = {
  input: DeleteNotebookInput,
  condition?: ModelNotebookConditionInput | null,
};

export type DeleteNotebookMutation = {
  deleteNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNoteTagMutationVariables = {
  input: CreateNoteTagInput,
  condition?: ModelNoteTagConditionInput | null,
};

export type CreateNoteTagMutation = {
  createNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteTagMutationVariables = {
  input: UpdateNoteTagInput,
  condition?: ModelNoteTagConditionInput | null,
};

export type UpdateNoteTagMutation = {
  updateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteTagMutationVariables = {
  input: DeleteNoteTagInput,
  condition?: ModelNoteTagConditionInput | null,
};

export type DeleteNoteTagMutation = {
  deleteNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePageTagMutationVariables = {
  input: CreatePageTagInput,
  condition?: ModelPageTagConditionInput | null,
};

export type CreatePageTagMutation = {
  createPageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePageTagMutationVariables = {
  input: UpdatePageTagInput,
  condition?: ModelPageTagConditionInput | null,
};

export type UpdatePageTagMutation = {
  updatePageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePageTagMutationVariables = {
  input: DeletePageTagInput,
  condition?: ModelPageTagConditionInput | null,
};

export type DeletePageTagMutation = {
  deletePageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotebookQueryVariables = {
  id: string,
};

export type GetNotebookQuery = {
  getNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotebooksQueryVariables = {
  filter?: ModelNotebookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotebooksQuery = {
  listNotebooks?:  {
    __typename: "ModelNotebookConnection",
    items:  Array< {
      __typename: "Notebook",
      id: string,
      title: string,
      Pages?:  {
        __typename: "ModelPageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageQueryVariables = {
  id: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPagesQueryVariables = {
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteTagQueryVariables = {
  id: string,
};

export type GetNoteTagQuery = {
  getNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNoteTagsQueryVariables = {
  filter?: ModelNoteTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNoteTagsQuery = {
  listNoteTags?:  {
    __typename: "ModelNoteTagConnection",
    items:  Array< {
      __typename: "NoteTag",
      id: string,
      tagID: string,
      noteID: string,
      tag:  {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPageTagQueryVariables = {
  id: string,
};

export type GetPageTagQuery = {
  getPageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPageTagsQueryVariables = {
  filter?: ModelPageTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPageTagsQuery = {
  listPageTags?:  {
    __typename: "ModelPageTagConnection",
    items:  Array< {
      __typename: "PageTag",
      id: string,
      tagID: string,
      pageID: string,
      tag:  {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      page:  {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Pages?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    body: string,
    parent?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    children?:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    pageID?: string | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotebookSubscription = {
  onCreateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotebookSubscription = {
  onUpdateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotebookSubscription = {
  onDeleteNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    Pages?:  {
      __typename: "ModelPageConnection",
      items:  Array< {
        __typename: "Page",
        id: string,
        title: string,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePageSubscription = {
  onCreatePage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePageSubscription = {
  onUpdatePage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePageSubscription = {
  onDeletePage?:  {
    __typename: "Page",
    id: string,
    title: string,
    notebookID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Tags?:  {
      __typename: "ModelPageTagConnection",
      items:  Array< {
        __typename: "PageTag",
        id: string,
        tagID: string,
        pageID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteTagSubscription = {
  onCreateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteTagSubscription = {
  onUpdateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteTagSubscription = {
  onDeleteNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      body: string,
      parent?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      children?:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        body: string,
        pageID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      pageID?: string | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePageTagSubscription = {
  onCreatePageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePageTagSubscription = {
  onUpdatePageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePageTagSubscription = {
  onDeletePageTag?:  {
    __typename: "PageTag",
    id: string,
    tagID: string,
    pageID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      Pages?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    page:  {
      __typename: "Page",
      id: string,
      title: string,
      notebookID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Tags?:  {
        __typename: "ModelPageTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
