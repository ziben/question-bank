import { z } from 'zod';
import { UserRoleWithRelationsSchema, UserRoleOptionalDefaultsWithRelationsSchema } from './UserRoleSchema'
import type { UserRoleWithRelations, UserRoleOptionalDefaultsWithRelations } from './UserRoleSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  code: z.string(),
  description: z.string().nullable(),
  permissions: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int().nullable(),
  updaterId: z.number().int().nullable(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// ROLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RoleOptionalDefaultsSchema = RoleSchema.merge(z.object({
  id: z.number().int().optional(),
  permissions: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type RoleOptionalDefaults = z.infer<typeof RoleOptionalDefaultsSchema>

/////////////////////////////////////////
// ROLE RELATION SCHEMA
/////////////////////////////////////////

export type RoleRelations = {
  users: UserRoleWithRelations[];
  createdBy?: UserWithRelations | null;
  updatedBy?: UserWithRelations | null;
};

export type RoleWithRelations = z.infer<typeof RoleSchema> & RoleRelations

export const RoleWithRelationsSchema: z.ZodType<RoleWithRelations> = RoleSchema.merge(z.object({
  users: z.lazy(() => UserRoleWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// ROLE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type RoleOptionalDefaultsRelations = {
  users: UserRoleOptionalDefaultsWithRelations[];
  createdBy?: UserOptionalDefaultsWithRelations | null;
  updatedBy?: UserOptionalDefaultsWithRelations | null;
};

export type RoleOptionalDefaultsWithRelations = z.infer<typeof RoleOptionalDefaultsSchema> & RoleOptionalDefaultsRelations

export const RoleOptionalDefaultsWithRelationsSchema: z.ZodType<RoleOptionalDefaultsWithRelations> = RoleOptionalDefaultsSchema.merge(z.object({
  users: z.lazy(() => UserRoleOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
}))

export default RoleSchema;
