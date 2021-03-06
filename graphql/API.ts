/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRelationshipInput = {
  id?: string | null,
  type?: string | null,
  name?: string | null,
  notebookID?: string | null,
  _version?: number | null,
};

export type ModelRelationshipConditionInput = {
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelRelationshipConditionInput | null > | null,
  or?: Array< ModelRelationshipConditionInput | null > | null,
  not?: ModelRelationshipConditionInput | null,
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

export type Relationship = {
  __typename: "Relationship",
  id: string,
  type?: string | null,
  name?: string | null,
  notes?: ModelNoteRelationshipConnection | null,
  notebookID?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelNoteRelationshipConnection = {
  __typename: "ModelNoteRelationshipConnection",
  items:  Array<NoteRelationship | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type NoteRelationship = {
  __typename: "NoteRelationship",
  id: string,
  relationshipID: string,
  noteID: string,
  relationship: Relationship,
  note: Note,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Note = {
  __typename: "Note",
  id: string,
  title?: string | null,
  content: string,
  hidden?: boolean | null,
  Tags?: ModelNoteTagConnection | null,
  notebookID: string,
  Relationships?: ModelNoteRelationshipConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelNoteTagConnection = {
  __typename: "ModelNoteTagConnection",
  items:  Array<NoteTag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  color?: string | null,
  content?: string | null,
  Notes?: ModelNoteTagConnection | null,
  notebookID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRelationshipInput = {
  id: string,
  type?: string | null,
  name?: string | null,
  notebookID?: string | null,
  _version?: number | null,
};

export type DeleteRelationshipInput = {
  id: string,
  _version?: number | null,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  color?: string | null,
  content?: string | null,
  notebookID: string,
  _version?: number | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  content?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  color?: string | null,
  content?: string | null,
  notebookID?: string | null,
  _version?: number | null,
};

export type DeleteTagInput = {
  id: string,
  _version?: number | null,
};

export type CreateNoteInput = {
  id?: string | null,
  title?: string | null,
  content: string,
  hidden?: boolean | null,
  notebookID: string,
  _version?: number | null,
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  hidden?: ModelBooleanInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateNoteInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  hidden?: boolean | null,
  notebookID?: string | null,
  _version?: number | null,
};

export type DeleteNoteInput = {
  id: string,
  _version?: number | null,
};

export type CreateNotebookInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelNotebookConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  editors?: ModelStringInput | null,
  readers?: ModelStringInput | null,
  and?: Array< ModelNotebookConditionInput | null > | null,
  or?: Array< ModelNotebookConditionInput | null > | null,
  not?: ModelNotebookConditionInput | null,
};

export type Notebook = {
  __typename: "Notebook",
  id: string,
  title: string,
  description?: string | null,
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  Tags?: ModelTagConnection | null,
  Notes?: ModelNoteConnection | null,
  Relationships?: ModelRelationshipConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRelationshipConnection = {
  __typename: "ModelRelationshipConnection",
  items:  Array<Relationship | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateNotebookInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteNotebookInput = {
  id: string,
  _version?: number | null,
};

export type CreateNoteRelationshipInput = {
  id?: string | null,
  relationshipID: string,
  noteID: string,
  _version?: number | null,
};

export type ModelNoteRelationshipConditionInput = {
  relationshipID?: ModelIDInput | null,
  noteID?: ModelIDInput | null,
  and?: Array< ModelNoteRelationshipConditionInput | null > | null,
  or?: Array< ModelNoteRelationshipConditionInput | null > | null,
  not?: ModelNoteRelationshipConditionInput | null,
};

export type UpdateNoteRelationshipInput = {
  id: string,
  relationshipID?: string | null,
  noteID?: string | null,
  _version?: number | null,
};

export type DeleteNoteRelationshipInput = {
  id: string,
  _version?: number | null,
};

export type CreateNoteTagInput = {
  id?: string | null,
  tagID: string,
  noteID: string,
  _version?: number | null,
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
  _version?: number | null,
};

export type DeleteNoteTagInput = {
  id: string,
  _version?: number | null,
};

export type ModelRelationshipFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelRelationshipFilterInput | null > | null,
  or?: Array< ModelRelationshipFilterInput | null > | null,
  not?: ModelRelationshipFilterInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  content?: ModelStringInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  hidden?: ModelBooleanInput | null,
  notebookID?: ModelIDInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNotebookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  editors?: ModelStringInput | null,
  readers?: ModelStringInput | null,
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

export type ModelNoteRelationshipFilterInput = {
  id?: ModelIDInput | null,
  relationshipID?: ModelIDInput | null,
  noteID?: ModelIDInput | null,
  and?: Array< ModelNoteRelationshipFilterInput | null > | null,
  or?: Array< ModelNoteRelationshipFilterInput | null > | null,
  not?: ModelNoteRelationshipFilterInput | null,
};

export type ModelNoteTagFilterInput = {
  id?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  noteID?: ModelIDInput | null,
  and?: Array< ModelNoteTagFilterInput | null > | null,
  or?: Array< ModelNoteTagFilterInput | null > | null,
  not?: ModelNoteTagFilterInput | null,
};

export type CreateRelationshipMutationVariables = {
  input: CreateRelationshipInput,
  condition?: ModelRelationshipConditionInput | null,
};

export type CreateRelationshipMutation = {
  createRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRelationshipMutationVariables = {
  input: UpdateRelationshipInput,
  condition?: ModelRelationshipConditionInput | null,
};

export type UpdateRelationshipMutation = {
  updateRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRelationshipMutationVariables = {
  input: DeleteRelationshipInput,
  condition?: ModelRelationshipConditionInput | null,
};

export type DeleteRelationshipMutation = {
  deleteRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    name: string,
    color?: string | null,
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    description?: string | null,
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNoteRelationshipMutationVariables = {
  input: CreateNoteRelationshipInput,
  condition?: ModelNoteRelationshipConditionInput | null,
};

export type CreateNoteRelationshipMutation = {
  createNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNoteRelationshipMutationVariables = {
  input: UpdateNoteRelationshipInput,
  condition?: ModelNoteRelationshipConditionInput | null,
};

export type UpdateNoteRelationshipMutation = {
  updateNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNoteRelationshipMutationVariables = {
  input: DeleteNoteRelationshipInput,
  condition?: ModelNoteRelationshipConditionInput | null,
};

export type DeleteNoteRelationshipMutation = {
  deleteNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetRelationshipQueryVariables = {
  id: string,
};

export type GetRelationshipQuery = {
  getRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRelationshipsQueryVariables = {
  filter?: ModelRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRelationshipsQuery = {
  listRelationships?:  {
    __typename: "ModelRelationshipConnection",
    items:  Array< {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRelationshipsQueryVariables = {
  filter?: ModelRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRelationshipsQuery = {
  syncRelationships?:  {
    __typename: "ModelRelationshipConnection",
    items:  Array< {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    name: string,
    color?: string | null,
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
      name: string,
      color?: string | null,
      content?: string | null,
      Notes?:  {
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
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      Tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Relationships?:  {
        __typename: "ModelRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      Tags?:  {
        __typename: "ModelTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Relationships?:  {
        __typename: "ModelRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNoteRelationshipQueryVariables = {
  id: string,
};

export type GetNoteRelationshipQuery = {
  getNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNoteRelationshipsQueryVariables = {
  filter?: ModelNoteRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNoteRelationshipsQuery = {
  listNoteRelationships?:  {
    __typename: "ModelNoteRelationshipConnection",
    items:  Array< {
      __typename: "NoteRelationship",
      id: string,
      relationshipID: string,
      noteID: string,
      relationship:  {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNoteRelationshipsQueryVariables = {
  filter?: ModelNoteRelationshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNoteRelationshipsQuery = {
  syncNoteRelationships?:  {
    __typename: "ModelNoteRelationshipConnection",
    items:  Array< {
      __typename: "NoteRelationship",
      id: string,
      relationshipID: string,
      noteID: string,
      relationship:  {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
    tagID: string,
    noteID: string,
    tag:  {
      __typename: "Tag",
      id: string,
      name: string,
      color?: string | null,
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
      tagID: string,
      noteID: string,
      tag:  {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      note:  {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRelationshipSubscription = {
  onCreateRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRelationshipSubscription = {
  onUpdateRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRelationshipSubscription = {
  onDeleteRelationship?:  {
    __typename: "Relationship",
    id: string,
    type?: string | null,
    name?: string | null,
    notes?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    color?: string | null,
    content?: string | null,
    Notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
  } | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    title?: string | null,
    content: string,
    hidden?: boolean | null,
    Tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        tagID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notebookID: string,
    Relationships?:  {
      __typename: "ModelNoteRelationshipConnection",
      items:  Array< {
        __typename: "NoteRelationship",
        id: string,
        relationshipID: string,
        noteID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNotebookSubscription = {
  onCreateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    description?: string | null,
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNotebookSubscription = {
  onUpdateNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    description?: string | null,
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNotebookSubscription = {
  onDeleteNotebook?:  {
    __typename: "Notebook",
    id: string,
    title: string,
    description?: string | null,
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    Tags?:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        name: string,
        color?: string | null,
        content?: string | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        title?: string | null,
        content: string,
        hidden?: boolean | null,
        notebookID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Relationships?:  {
      __typename: "ModelRelationshipConnection",
      items:  Array< {
        __typename: "Relationship",
        id: string,
        type?: string | null,
        name?: string | null,
        notebookID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNoteRelationshipSubscription = {
  onCreateNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNoteRelationshipSubscription = {
  onUpdateNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNoteRelationshipSubscription = {
  onDeleteNoteRelationship?:  {
    __typename: "NoteRelationship",
    id: string,
    relationshipID: string,
    noteID: string,
    relationship:  {
      __typename: "Relationship",
      id: string,
      type?: string | null,
      name?: string | null,
      notes?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      content?: string | null,
      Notes?:  {
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
    },
    note:  {
      __typename: "Note",
      id: string,
      title?: string | null,
      content: string,
      hidden?: boolean | null,
      Tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notebookID: string,
      Relationships?:  {
        __typename: "ModelNoteRelationshipConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
