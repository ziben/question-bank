import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleIncludeSchema } from '../inputTypeSchemas/UserRoleIncludeSchema'
import { UserRoleWhereUniqueInputSchema } from '../inputTypeSchemas/UserRoleWhereUniqueInputSchema'
import { UserRoleCreateInputSchema } from '../inputTypeSchemas/UserRoleCreateInputSchema'
import { UserRoleUncheckedCreateInputSchema } from '../inputTypeSchemas/UserRoleUncheckedCreateInputSchema'
import { UserRoleUpdateInputSchema } from '../inputTypeSchemas/UserRoleUpdateInputSchema'
import { UserRoleUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserRoleUncheckedUpdateInputSchema'
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

export const UserRoleUpsertArgsSchema: z.ZodType<Prisma.UserRoleUpsertArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema,
  create: z.union([ UserRoleCreateInputSchema,UserRoleUncheckedCreateInputSchema ]),
  update: z.union([ UserRoleUpdateInputSchema,UserRoleUncheckedUpdateInputSchema ]),
}).strict() ;

export default UserRoleUpsertArgsSchema;
