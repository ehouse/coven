// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NoteType = {
  "TEXT": "TEXT",
  "CHECKBOX": "CHECKBOX",
  "TIMELINE": "TIMELINE"
};

const { Note, Notebook } = initSchema(schema);

export {
  Note,
  Notebook,
  NoteType
};