/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNotebookInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  color?: string | null,
  _version?: number | null,
};

export type ModelNotebookConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelNotebookConditionInput | null > | null,
  or?: Array< ModelNotebookConditionInput | null > | null,
  not?: ModelNotebookConditionInput | null,
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

export type Notebook = {
  __typename: "Notebook",
  id: string,
  title: string,
  description?: string | null,
  color?: string | null,
  Notes?: ModelNoteConnection | null,
  tags?: ModelTagConnection | null,
  category?: ModelCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  title?: string | null,
  noteType: NoteType,
  content?: string | null,
  hidden?: boolean | null,
  notebookID: string,
  categoryID?: string | null,
  tags?: ModelNoteTagConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export enum NoteType {
  TEXT = "TEXT",
  CHECKBOX = "CHECKBOX",
  TIMELINE = "TIMELINE",
}


export type ModelNoteTagConnection = {
  __typename: "ModelNoteTagConnection",
  items:  Array<NoteTag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type NoteTag = {
  __typename: "NoteTag",
  id: string,
  noteID: string,
  tagID: string,
  note: Note,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  title: string,
  notes?: ModelNoteTagConnection | null,
  notebookID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  notes?: ModelNoteConnection | null,
  notebookID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateNotebookInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  color?: string | null,
  _version?: number | null,
};

export type DeleteNotebookInput = {
  id: string,
  _version?: number | null,
};

export type CreateNoteInput = {
  id?: string | null,
  title?: string | null,
  noteType: NoteType,
  content?: string | null,
  hidden?: boolean | null,
  notebookID: string,
  categoryID?: string | null,
  _version?: number | null,
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null,
  noteType?: ModelNoteTypeInput | null,
  content?: ModelStringInput | null,
  hidden?: ModelBooleanInput | null,
  notebookID?: ModelIDInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelNoteTypeInput = {
  eq?: NoteType | null,
  ne?: NoteType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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
  noteType?: NoteType | null,
  content?: string | null,
  hidden?: boolean | null,
  notebookID?: string | null,
  categoryID?: string | null,
  _version?: number | null,
};

export type DeleteNoteInput = {
  id: string,
  _version?: number | null,
};

export type CreateTagInput = {
  id?: string | null,
  title: string,
  notebookID: string,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  title?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  title?: string | null,
  notebookID?: string | null,
  _version?: number | null,
};

export type DeleteTagInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  notebookID: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  notebookID?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateNoteTagInput = {
  id?: string | null,
  noteID: string,
  tagID: string,
  _version?: number | null,
};

export type ModelNoteTagConditionInput = {
  noteID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelNoteTagConditionInput | null > | null,
  or?: Array< ModelNoteTagConditionInput | null > | null,
  not?: ModelNoteTagConditionInput | null,
};

export type UpdateNoteTagInput = {
  id: string,
  noteID?: string | null,
  tagID?: string | null,
  _version?: number | null,
};

export type DeleteNoteTagInput = {
  id: string,
  _version?: number | null,
};

export type ModelNotebookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelNotebookFilterInput | null > | null,
  or?: Array< ModelNotebookFilterInput | null > | null,
  not?: ModelNotebookFilterInput | null,
};

export type ModelNotebookConnection = {
  __typename: "ModelNotebookConnection",
  items:  Array<Notebook | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  noteType?: ModelNoteTypeInput | null,
  content?: ModelStringInput | null,
  hidden?: ModelBooleanInput | null,
  notebookID?: ModelIDInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelNoteTagFilterInput = {
  id?: ModelIDInput | null,
  noteID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelNoteTagFilterInput | null > | null,
  or?: Array< ModelNoteTagFilterInput | null > | null,
  not?: ModelNoteTagFilterInput | null,
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
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      description?: string | null,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotebooksQueryVariables = {
  filter?: ModelNotebookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotebooksQuery = {
  syncNotebooks?:  {
    __typename: "ModelNotebookConnection",
    items:  Array< {
      __typename: "Notebook",
      id: string,
      title: string,
      description?: string | null,
      color?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      category?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotesQuery = {
  syncNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTagsQuery = {
  syncTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNoteTagQueryVariables = {
  id: string,
};

export type GetNoteTagQuery = {
  getNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      noteID: string,
      tagID: string,
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNoteTagsQueryVariables = {
  filter?: ModelNoteTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNoteTagsQuery = {
  syncNoteTags?:  {
    __typename: "ModelNoteTagConnection",
    items:  Array< {
      __typename: "NoteTag",
      id: string,
      noteID: string,
      tagID: string,
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateNotebookSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNotebookSubscription = {
  onCreateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateNotebookSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNotebookSubscription = {
  onUpdateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteNotebookSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNotebookSubscription = {
  onDeleteNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    description?: string | null,
    color?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    category?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        title: string,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    noteType: NoteType,
    content?: string | null,
    hidden?: boolean | null,
    notebookID: string,
    categoryID?: string | null,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteID: string,
        tagID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        noteType: NoteType,
        content?: string | null,
        hidden?: boolean | null,
        notebookID: string,
        categoryID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateNoteTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNoteTagSubscription = {
  onCreateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateNoteTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNoteTagSubscription = {
  onUpdateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteNoteTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNoteTagSubscription = {
  onDeleteNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteID: string,
    tagID: string,
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      noteType: NoteType,
      content?: string | null,
      hidden?: boolean | null,
      notebookID: string,
      categoryID?: string | null,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      title: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
