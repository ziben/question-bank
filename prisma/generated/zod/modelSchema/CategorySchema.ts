import { z } from 'zod';
import { QuestionWithRelationsSchema, QuestionOptionalDefaultsWithRelationsSchema } from './QuestionSchema'
import type { QuestionWithRelations, QuestionOptionalDefaultsWithRelations } from './QuestionSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CategoryOptionalDefaultsSchema = CategorySchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type CategoryOptionalDefaults = z.infer<typeof CategoryOptionalDefaultsSchema>

/////////////////////////////////////////
// CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type CategoryRelations = {
  questions: QuestionWithRelations[];
  createdBy: UserWithRelations;
  updatedBy: UserWithRelations;
};

export type CategoryWithRelations = z.infer<typeof CategorySchema> & CategoryRelations

export const CategoryWithRelationsSchema: z.ZodType<CategoryWithRelations> = CategorySchema.merge(z.object({
  questions: z.lazy(() => QuestionWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema),
  updatedBy: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// CATEGORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CategoryOptionalDefaultsRelations = {
  questions: QuestionOptionalDefaultsWithRelations[];
  createdBy: UserOptionalDefaultsWithRelations;
  updatedBy: UserOptionalDefaultsWithRelations;
};

export type CategoryOptionalDefaultsWithRelations = z.infer<typeof CategoryOptionalDefaultsSchema> & CategoryOptionalDefaultsRelations

export const CategoryOptionalDefaultsWithRelationsSchema: z.ZodType<CategoryOptionalDefaultsWithRelations> = CategoryOptionalDefaultsSchema.merge(z.object({
  questions: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default CategorySchema;
