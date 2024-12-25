import { z } from 'zod';
import { QuestionWithRelationsSchema, QuestionOptionalDefaultsWithRelationsSchema } from './QuestionSchema'
import type { QuestionWithRelations, QuestionOptionalDefaultsWithRelations } from './QuestionSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// SOURCE SCHEMA
/////////////////////////////////////////

export const SourceSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
})

export type Source = z.infer<typeof SourceSchema>

/////////////////////////////////////////
// SOURCE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SourceOptionalDefaultsSchema = SourceSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type SourceOptionalDefaults = z.infer<typeof SourceOptionalDefaultsSchema>

/////////////////////////////////////////
// SOURCE RELATION SCHEMA
/////////////////////////////////////////

export type SourceRelations = {
  questions: QuestionWithRelations[];
  createdBy: UserWithRelations;
  updatedBy: UserWithRelations;
};

export type SourceWithRelations = z.infer<typeof SourceSchema> & SourceRelations

export const SourceWithRelationsSchema: z.ZodType<SourceWithRelations> = SourceSchema.merge(z.object({
  questions: z.lazy(() => QuestionWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema),
  updatedBy: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// SOURCE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type SourceOptionalDefaultsRelations = {
  questions: QuestionOptionalDefaultsWithRelations[];
  createdBy: UserOptionalDefaultsWithRelations;
  updatedBy: UserOptionalDefaultsWithRelations;
};

export type SourceOptionalDefaultsWithRelations = z.infer<typeof SourceOptionalDefaultsSchema> & SourceOptionalDefaultsRelations

export const SourceOptionalDefaultsWithRelationsSchema: z.ZodType<SourceOptionalDefaultsWithRelations> = SourceOptionalDefaultsSchema.merge(z.object({
  questions: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default SourceSchema;
