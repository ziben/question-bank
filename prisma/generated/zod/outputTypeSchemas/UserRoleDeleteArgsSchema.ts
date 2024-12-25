import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleIncludeSchema } from '../inputTypeSchemas/UserRoleIncludeSchema'
import { UserRoleWhereUniqueInputSchema } from '../inputTypeSchemas/UserRoleWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserRoleSelectSchema: z.ZodType<Prisma.UserRoleSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
}).strict()

export const UserRoleDeleteArgsSchema: z.ZodType<Prisma.UserRoleDeleteArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
}).strict() ;

export default UserRoleDeleteArgsSchema;
