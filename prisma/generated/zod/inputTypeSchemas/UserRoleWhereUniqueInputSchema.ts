import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUserIdRoleIdCompoundUniqueInputSchema } from './UserRoleUserIdRoleIdCompoundUniqueInputSchema';
import { UserRoleWhereInputSchema } from './UserRoleWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { RoleScalarRelationFilterSchema } from './RoleScalarRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const UserRoleWhereUniqueInputSchema: z.ZodType<Prisma.UserRoleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    userId_roleId: z.lazy(() => UserRoleUserIdRoleIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    userId_roleId: z.lazy(() => UserRoleUserIdRoleIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  userId_roleId: z.lazy(() => UserRoleUserIdRoleIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema),z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleScalarRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional(),
}).strict());

export default UserRoleWhereUniqueInputSchema;
