import { z } from 'zod';
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// PERMISSION SCHEMA
/////////////////////////////////////////

export const PermissionSchema = z.object({
  id: z.number().int(),
  groupName: z.string(),
  groupCode: z.string(),
  actionName: z.string(),
  actionCode: z.string(),
  code: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
})

export type Permission = z.infer<typeof PermissionSchema>

/////////////////////////////////////////
// PERMISSION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PermissionOptionalDefaultsSchema = PermissionSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type PermissionOptionalDefaults = z.infer<typeof PermissionOptionalDefaultsSchema>

/////////////////////////////////////////
// PERMISSION RELATION SCHEMA
/////////////////////////////////////////

export type PermissionRelations = {
  createdBy: UserWithRelations;
  updatedBy: UserWithRelations;
};

export type PermissionWithRelations = z.infer<typeof PermissionSchema> & PermissionRelations

export const PermissionWithRelationsSchema: z.ZodType<PermissionWithRelations> = PermissionSchema.merge(z.object({
  createdBy: z.lazy(() => UserWithRelationsSchema),
  updatedBy: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// PERMISSION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PermissionOptionalDefaultsRelations = {
  createdBy: UserOptionalDefaultsWithRelations;
  updatedBy: UserOptionalDefaultsWithRelations;
};

export type PermissionOptionalDefaultsWithRelations = z.infer<typeof PermissionOptionalDefaultsSchema> & PermissionOptionalDefaultsRelations

export const PermissionOptionalDefaultsWithRelationsSchema: z.ZodType<PermissionOptionalDefaultsWithRelations> = PermissionOptionalDefaultsSchema.merge(z.object({
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default PermissionSchema;
