import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PermissionIncludeSchema } from '../inputTypeSchemas/PermissionIncludeSchema'
import { PermissionWhereUniqueInputSchema } from '../inputTypeSchemas/PermissionWhereUniqueInputSchema'
import { PermissionCreateInputSchema } from '../inputTypeSchemas/PermissionCreateInputSchema'
import { PermissionUncheckedCreateInputSchema } from '../inputTypeSchemas/PermissionUncheckedCreateInputSchema'
import { PermissionUpdateInputSchema } from '../inputTypeSchemas/PermissionUpdateInputSchema'
import { PermissionUncheckedUpdateInputSchema } from '../inputTypeSchemas/PermissionUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PermissionSelectSchema: z.ZodType<Prisma.PermissionSelect> = z.object({
  id: z.boolean().optional(),
  groupName: z.boolean().optional(),
  groupCode: z.boolean().optional(),
  actionName: z.boolean().optional(),
  actionCode: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const PermissionUpsertArgsSchema: z.ZodType<Prisma.PermissionUpsertArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema,
  create: z.union([ PermissionCreateInputSchema,PermissionUncheckedCreateInputSchema ]),
  update: z.union([ PermissionUpdateInputSchema,PermissionUncheckedUpdateInputSchema ]),
}).strict() ;

export default PermissionUpsertArgsSchema;
