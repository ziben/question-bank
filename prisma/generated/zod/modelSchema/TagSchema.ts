import { z } from 'zod';
import { TagCategoryWithRelationsSchema, TagCategoryOptionalDefaultsWithRelationsSchema } from './TagCategorySchema'
import type { TagCategoryWithRelations, TagCategoryOptionalDefaultsWithRelations } from './TagCategorySchema'
import { QuestionTagWithRelationsSchema, QuestionTagOptionalDefaultsWithRelationsSchema } from './QuestionTagSchema'
import type { QuestionTagWithRelations, QuestionTagOptionalDefaultsWithRelations } from './QuestionTagSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string().nullable(),
  description: z.string().nullable(),
  sortOrder: z.number().int(),
  categoryId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int().nullable(),
  updaterId: z.number().int().nullable(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TagOptionalDefaultsSchema = TagSchema.merge(z.object({
  id: z.number().int().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type TagOptionalDefaults = z.infer<typeof TagOptionalDefaultsSchema>

/////////////////////////////////////////
// TAG RELATION SCHEMA
/////////////////////////////////////////

export type TagRelations = {
  category: TagCategoryWithRelations;
  questionTags: QuestionTagWithRelations[];
  createdBy?: UserWithRelations | null;
  updatedBy?: UserWithRelations | null;
};

export type TagWithRelations = z.infer<typeof TagSchema> & TagRelations

export const TagWithRelationsSchema: z.ZodType<TagWithRelations> = TagSchema.merge(z.object({
  category: z.lazy(() => TagCategoryWithRelationsSchema),
  questionTags: z.lazy(() => QuestionTagWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// TAG OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type TagOptionalDefaultsRelations = {
  category: TagCategoryOptionalDefaultsWithRelations;
  questionTags: QuestionTagOptionalDefaultsWithRelations[];
  createdBy?: UserOptionalDefaultsWithRelations | null;
  updatedBy?: UserOptionalDefaultsWithRelations | null;
};

export type TagOptionalDefaultsWithRelations = z.infer<typeof TagOptionalDefaultsSchema> & TagOptionalDefaultsRelations

export const TagOptionalDefaultsWithRelationsSchema: z.ZodType<TagOptionalDefaultsWithRelations> = TagOptionalDefaultsSchema.merge(z.object({
  category: z.lazy(() => TagCategoryOptionalDefaultsWithRelationsSchema),
  questionTags: z.lazy(() => QuestionTagOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default TagSchema;
