import { z } from 'zod';
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// SYSTEM LOG SCHEMA
/////////////////////////////////////////

export const SystemLogSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  module: z.string(),
  action: z.string(),
  target: z.string(),
  targetId: z.string(),
  detail: z.string().nullable(),
  ip: z.string().nullable(),
  userAgent: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SystemLog = z.infer<typeof SystemLogSchema>

/////////////////////////////////////////
// SYSTEM LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SystemLogOptionalDefaultsSchema = SystemLogSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type SystemLogOptionalDefaults = z.infer<typeof SystemLogOptionalDefaultsSchema>

/////////////////////////////////////////
// SYSTEM LOG RELATION SCHEMA
/////////////////////////////////////////

export type SystemLogRelations = {
  user: UserWithRelations;
};

export type SystemLogWithRelations = z.infer<typeof SystemLogSchema> & SystemLogRelations

export const SystemLogWithRelationsSchema: z.ZodType<SystemLogWithRelations> = SystemLogSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// SYSTEM LOG OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type SystemLogOptionalDefaultsRelations = {
  user: UserOptionalDefaultsWithRelations;
};

export type SystemLogOptionalDefaultsWithRelations = z.infer<typeof SystemLogOptionalDefaultsSchema> & SystemLogOptionalDefaultsRelations

export const SystemLogOptionalDefaultsWithRelationsSchema: z.ZodType<SystemLogOptionalDefaultsWithRelations> = SystemLogOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default SystemLogSchema;
