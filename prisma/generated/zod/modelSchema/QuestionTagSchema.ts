import { z } from 'zod';
import { QuestionWithRelationsSchema, QuestionOptionalDefaultsWithRelationsSchema } from './QuestionSchema'
import type { QuestionWithRelations, QuestionOptionalDefaultsWithRelations } from './QuestionSchema'
import { TagWithRelationsSchema, TagOptionalDefaultsWithRelationsSchema } from './TagSchema'
import type { TagWithRelations, TagOptionalDefaultsWithRelations } from './TagSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// QUESTION TAG SCHEMA
/////////////////////////////////////////

export const QuestionTagSchema = z.object({
  id: z.number().int(),
  questionId: z.number().int(),
  tagId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int().nullable(),
  updaterId: z.number().int().nullable(),
})

export type QuestionTag = z.infer<typeof QuestionTagSchema>

/////////////////////////////////////////
// QUESTION TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuestionTagOptionalDefaultsSchema = QuestionTagSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type QuestionTagOptionalDefaults = z.infer<typeof QuestionTagOptionalDefaultsSchema>

/////////////////////////////////////////
// QUESTION TAG RELATION SCHEMA
/////////////////////////////////////////

export type QuestionTagRelations = {
  question: QuestionWithRelations;
  tag: TagWithRelations;
  createdBy?: UserWithRelations | null;
  updatedBy?: UserWithRelations | null;
};

export type QuestionTagWithRelations = z.infer<typeof QuestionTagSchema> & QuestionTagRelations

export const QuestionTagWithRelationsSchema: z.ZodType<QuestionTagWithRelations> = QuestionTagSchema.merge(z.object({
  question: z.lazy(() => QuestionWithRelationsSchema),
  tag: z.lazy(() => TagWithRelationsSchema),
  createdBy: z.lazy(() => UserWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// QUESTION TAG OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type QuestionTagOptionalDefaultsRelations = {
  question: QuestionOptionalDefaultsWithRelations;
  tag: TagOptionalDefaultsWithRelations;
  createdBy?: UserOptionalDefaultsWithRelations | null;
  updatedBy?: UserOptionalDefaultsWithRelations | null;
};

export type QuestionTagOptionalDefaultsWithRelations = z.infer<typeof QuestionTagOptionalDefaultsSchema> & QuestionTagOptionalDefaultsRelations

export const QuestionTagOptionalDefaultsWithRelationsSchema: z.ZodType<QuestionTagOptionalDefaultsWithRelations> = QuestionTagOptionalDefaultsSchema.merge(z.object({
  question: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema),
  tag: z.lazy(() => TagOptionalDefaultsWithRelationsSchema),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default QuestionTagSchema;
