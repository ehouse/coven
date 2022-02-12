import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum NoteType {
  TEXT = "TEXT",
  CHECKBOX = "CHECKBOX",
  TIMELINE = "TIMELINE"
}



type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotebookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Note {
  readonly id: string;
  readonly title?: string;
  readonly noteType: NoteType | keyof typeof NoteType;
  readonly content?: string;
  readonly hidden?: boolean;
  readonly notebookID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Notebook {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly color?: string;
  readonly Notes?: Note[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Notebook, NotebookMetaData>);
  static copyOf(source: Notebook, mutator: (draft: MutableModel<Notebook, NotebookMetaData>) => MutableModel<Notebook, NotebookMetaData> | void): Notebook;
}