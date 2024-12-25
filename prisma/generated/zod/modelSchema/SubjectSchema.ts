import { z } from 'zod';
import { QuestionWithRelationsSchema, QuestionOptionalDefaultsWithRelationsSchema } from './QuestionSchema'
import type { QuestionWithRelations, QuestionOptionalDefaultsWithRelations } from './QuestionSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// SUBJECT SCHEMA
/////////////////////////////////////////

export const SubjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
})

export type Subject = z.infer<typeof SubjectSchema>

/////////////////////////////////////////
// SUBJECT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SubjectOptionalDefaultsSchema = SubjectSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type SubjectOptionalDefaults = z.infer<typeof SubjectOptionalDefaultsSchema>

/////////////////////////////////////////
// SUBJECT RELATION SCHEMA
/////////////////////////////////////////

export type SubjectRelations = {
  questions: QuestionWithRelations[];
  createdBy: UserWithRelations;
  updatedBy: UserWithRelations;
};

export type SubjectWithRelations = z.infer<typeof SubjectSchema> & SubjectRelations

export const SubjectWithRelationsSchema: z.ZodType<SubjectWithRelations> = SubjectSchema.merge(z.object({
  questions: z.lazy(() => QuestionWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema),
  updatedBy: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// SUBJECT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type SubjectOptionalDefaultsRelations = {
  questions: QuestionOptionalDefaultsWithRelations[];
  createdBy: UserOptionalDefaultsWithRelations;
  updatedBy: UserOptionalDefaultsWithRelations;
};

export type SubjectOptionalDefaultsWithRelations = z.infer<typeof SubjectOptionalDefaultsSchema> & SubjectOptionalDefaultsRelations

export const SubjectOptionalDefaultsWithRelationsSchema: z.ZodType<SubjectOptionalDefaultsWithRelations> = SubjectOptionalDefaultsSchema.merge(z.object({
  questions: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default SubjectSchema;
