import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotebookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PageTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly color?: string;
  readonly Notes?: (NoteTag | null)[];
  readonly Pages?: (PageTag | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Note {
  readonly id: string;
  readonly title?: string;
  readonly body: string;
  readonly pageID?: string;
  readonly Tags?: (NoteTag | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Page {
  readonly id: string;
  readonly title: string;
  readonly notebookID?: string;
  readonly Notes?: (Note | null)[];
  readonly Tags?: (PageTag | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Page, PageMetaData>);
  static copyOf(source: Page, mutator: (draft: MutableModel<Page, PageMetaData>) => MutableModel<Page, PageMetaData> | void): Page;
}

export declare class Notebook {
  readonly id: string;
  readonly title: string;
  readonly Pages?: (Page | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notebook, NotebookMetaData>);
  static copyOf(source: Notebook, mutator: (draft: MutableModel<Notebook, NotebookMetaData>) => MutableModel<Notebook, NotebookMetaData> | void): Notebook;
}

export declare class NoteTag {
  readonly id: string;
  readonly tag: Tag;
  readonly note: Note;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NoteTag, NoteTagMetaData>);
  static copyOf(source: NoteTag, mutator: (draft: MutableModel<NoteTag, NoteTagMetaData>) => MutableModel<NoteTag, NoteTagMetaData> | void): NoteTag;
}

export declare class PageTag {
  readonly id: string;
  readonly tag: Tag;
  readonly page: Page;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PageTag, PageTagMetaData>);
  static copyOf(source: PageTag, mutator: (draft: MutableModel<PageTag, PageTagMetaData>) => MutableModel<PageTag, PageTagMetaData> | void): PageTag;
}