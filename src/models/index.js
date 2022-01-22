// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Note, Page, Notebook, NoteTag, PageTag } = initSchema(schema);

export {
  Tag,
  Note,
  Page,
  Notebook,
  NoteTag,
  PageTag
};