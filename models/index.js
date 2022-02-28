// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NoteType = {
  "TEXT": "TEXT",
  "CHECKBOX": "CHECKBOX",
  "TIMELINE": "TIMELINE"
};

const { Notebook, Note, Tag, Category, NoteTag } = initSchema(schema);

export {
  Notebook,
  Note,
  Tag,
  Category,
  NoteTag,
  NoteType
};