import { z } from 'zod';
import { QuestionWithRelationsSchema, QuestionOptionalDefaultsWithRelationsSchema } from './QuestionSchema'
import type { QuestionWithRelations, QuestionOptionalDefaultsWithRelations } from './QuestionSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// GRADE SCHEMA
/////////////////////////////////////////

export const GradeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
})

export type Grade = z.infer<typeof GradeSchema>

/////////////////////////////////////////
// GRADE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const GradeOptionalDefaultsSchema = GradeSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type GradeOptionalDefaults = z.infer<typeof GradeOptionalDefaultsSchema>

/////////////////////////////////////////
// GRADE RELATION SCHEMA
/////////////////////////////////////////

export type GradeRelations = {
  questions: QuestionWithRelations[];
  createdBy: UserWithRelations;
  updatedBy: UserWithRelations;
};

export type GradeWithRelations = z.infer<typeof GradeSchema> & GradeRelations

export const GradeWithRelationsSchema: z.ZodType<GradeWithRelations> = GradeSchema.merge(z.object({
  questions: z.lazy(() => QuestionWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema),
  updatedBy: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// GRADE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type GradeOptionalDefaultsRelations = {
  questions: QuestionOptionalDefaultsWithRelations[];
  createdBy: UserOptionalDefaultsWithRelations;
  updatedBy: UserOptionalDefaultsWithRelations;
};

export type GradeOptionalDefaultsWithRelations = z.infer<typeof GradeOptionalDefaultsSchema> & GradeOptionalDefaultsRelations

export const GradeOptionalDefaultsWithRelationsSchema: z.ZodType<GradeOptionalDefaultsWithRelations> = GradeOptionalDefaultsSchema.merge(z.object({
  questions: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default GradeSchema;
