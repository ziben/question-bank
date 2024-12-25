import { z } from 'zod';
import { TagWithRelationsSchema, TagOptionalDefaultsWithRelationsSchema } from './TagSchema'
import type { TagWithRelations, TagOptionalDefaultsWithRelations } from './TagSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// TAG CATEGORY SCHEMA
/////////////////////////////////////////

export const TagCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string(),
  description: z.string().nullable(),
  allowMultiple: z.boolean(),
  sortOrder: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int().nullable(),
  updaterId: z.number().int().nullable(),
})

export type TagCategory = z.infer<typeof TagCategorySchema>

/////////////////////////////////////////
// TAG CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TagCategoryOptionalDefaultsSchema = TagCategorySchema.merge(z.object({
  id: z.number().int().optional(),
  allowMultiple: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type TagCategoryOptionalDefaults = z.infer<typeof TagCategoryOptionalDefaultsSchema>

/////////////////////////////////////////
// TAG CATEGORY RELATION SCHEMA
/////////////////////////////////////////

export type TagCategoryRelations = {
  tags: TagWithRelations[];
  createdBy?: UserWithRelations | null;
  updatedBy?: UserWithRelations | null;
};

export type TagCategoryWithRelations = z.infer<typeof TagCategorySchema> & TagCategoryRelations

export const TagCategoryWithRelationsSchema: z.ZodType<TagCategoryWithRelations> = TagCategorySchema.merge(z.object({
  tags: z.lazy(() => TagWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// TAG CATEGORY OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type TagCategoryOptionalDefaultsRelations = {
  tags: TagOptionalDefaultsWithRelations[];
  createdBy?: UserOptionalDefaultsWithRelations | null;
  updatedBy?: UserOptionalDefaultsWithRelations | null;
};

export type TagCategoryOptionalDefaultsWithRelations = z.infer<typeof TagCategoryOptionalDefaultsSchema> & TagCategoryOptionalDefaultsRelations

export const TagCategoryOptionalDefaultsWithRelationsSchema: z.ZodType<TagCategoryOptionalDefaultsWithRelations> = TagCategoryOptionalDefaultsSchema.merge(z.object({
  tags: z.lazy(() => TagOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default TagCategorySchema;
