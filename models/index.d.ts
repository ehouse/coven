import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RelationshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotebookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteRelationshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Relationship {
  readonly id: string;
  readonly type?: string;
  readonly name?: string;
  readonly notes?: (NoteRelationship | null)[];
  readonly notebookID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Relationship, RelationshipMetaData>);
  static copyOf(source: Relationship, mutator: (draft: MutableModel<Relationship, RelationshipMetaData>) => MutableModel<Relationship, RelationshipMetaData> | void): Relationship;
}

export declare class Note {
  readonly id: string;
  readonly title?: string;
  readonly content: string;
  readonly hidden?: boolean;
  readonly Tags?: (NoteTag | null)[];
  readonly notebookID: string;
  readonly Relationships?: (NoteRelationship | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly color?: string;
  readonly content?: string;
  readonly Notes?: (NoteTag | null)[];
  readonly notebookID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Notebook {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly editors?: (string | null)[];
  readonly readers?: (string | null)[];
  readonly Tags?: (Tag | null)[];
  readonly Notes?: (Note | null)[];
  readonly Relationships?: (Relationship | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notebook, NotebookMetaData>);
  static copyOf(source: Notebook, mutator: (draft: MutableModel<Notebook, NotebookMetaData>) => MutableModel<Notebook, NotebookMetaData> | void): Notebook;
}

export declare class NoteRelationship {
  readonly id: string;
  readonly relationship: Relationship;
  readonly note: Note;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NoteRelationship, NoteRelationshipMetaData>);
  static copyOf(source: NoteRelationship, mutator: (draft: MutableModel<NoteRelationship, NoteRelationshipMetaData>) => MutableModel<NoteRelationship, NoteRelationshipMetaData> | void): NoteRelationship;
}

export declare class NoteTag {
  readonly id: string;
  readonly note: Note;
  readonly tag: Tag;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NoteTag, NoteTagMetaData>);
  static copyOf(source: NoteTag, mutator: (draft: MutableModel<NoteTag, NoteTagMetaData>) => MutableModel<NoteTag, NoteTagMetaData> | void): NoteTag;
}