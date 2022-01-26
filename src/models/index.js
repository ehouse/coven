// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Relationship, Note, Tag, Notebook, NoteRelationship, NoteTag } = initSchema(schema);

export {
  Relationship,
  Note,
  Tag,
  Notebook,
  NoteRelationship,
  NoteTag
};