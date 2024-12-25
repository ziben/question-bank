import { z } from 'zod';
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'
import { RoleWithRelationsSchema, RoleOptionalDefaultsWithRelationsSchema } from './RoleSchema'
import type { RoleWithRelations, RoleOptionalDefaultsWithRelations } from './RoleSchema'

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  roleId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// USER ROLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserRoleOptionalDefaultsSchema = UserRoleSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserRoleOptionalDefaults = z.infer<typeof UserRoleOptionalDefaultsSchema>

/////////////////////////////////////////
// USER ROLE RELATION SCHEMA
/////////////////////////////////////////

export type UserRoleRelations = {
  user: UserWithRelations;
  role: RoleWithRelations;
};

export type UserRoleWithRelations = z.infer<typeof UserRoleSchema> & UserRoleRelations

export const UserRoleWithRelationsSchema: z.ZodType<UserRoleWithRelations> = UserRoleSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  role: z.lazy(() => RoleWithRelationsSchema),
}))

/////////////////////////////////////////
// USER ROLE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserRoleOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
  role: RoleOptionalDefaultsWithRelations;
};

export type UserRoleOptionalDefaultsWithRelations = z.infer<typeof UserRoleOptionalDefaultsSchema> & UserRoleOptionalDefaultsRelations

export const UserRoleOptionalDefaultsWithRelationsSchema: z.ZodType<UserRoleOptionalDefaultsWithRelations> = UserRoleOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  role: z.lazy(() => RoleOptionalDefaultsWithRelationsSchema),
}))

export default UserRoleSchema;
