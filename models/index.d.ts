import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum NoteType {
  TEXT = "TEXT",
  CHECKBOX = "CHECKBOX",
  TIMELINE = "TIMELINE"
}



type NotebookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Notebook {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly color?: string;
  readonly Notes?: Note[];
  readonly tags?: Tag[];
  readonly category?: Category[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notebook, NotebookMetaData>);
  static copyOf(source: Notebook, mutator: (draft: MutableModel<Notebook, NotebookMetaData>) => MutableModel<Notebook, NotebookMetaData> | void): Notebook;
}

export declare class Note {
  readonly id: string;
  readonly title?: string;
  readonly noteType: NoteType | keyof typeof NoteType;
  readonly content?: string;
  readonly hidden?: boolean;
  readonly notebookID: string;
  readonly categoryID?: string;
  readonly tags?: NoteTag[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Tag {
  readonly id: string;
  readonly title: string;
  readonly notes?: (NoteTag | null)[];
  readonly notebookID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly notes?: Note[];
  readonly notebookID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
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