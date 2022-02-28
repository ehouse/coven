// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NoteType = {
  "TEXT": "TEXT",
  "CHECKBOX": "CHECKBOX",
  "TIMELINE": "TIMELINE"
};

const { Notebook, Note, Category, Tag, NoteTag } = initSchema(schema);

export {
  Notebook,
  Note,
  Category,
  Tag,
  NoteTag,
  NoteType
};