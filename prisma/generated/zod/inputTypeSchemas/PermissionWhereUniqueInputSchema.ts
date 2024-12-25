import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionGroupCodeActionCodeCompoundUniqueInputSchema } from './PermissionGroupCodeActionCodeCompoundUniqueInputSchema';
import { PermissionWhereInputSchema } from './PermissionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const PermissionWhereUniqueInputSchema: z.ZodType<Prisma.PermissionWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    code: z.string(),
    groupCode_actionCode: z.lazy(() => PermissionGroupCodeActionCodeCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
    groupCode_actionCode: z.lazy(() => PermissionGroupCodeActionCodeCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    code: z.string(),
    groupCode_actionCode: z.lazy(() => PermissionGroupCodeActionCodeCompoundUniqueInputSchema),
  }),
  z.object({
    code: z.string(),
  }),
  z.object({
    groupCode_actionCode: z.lazy(() => PermissionGroupCodeActionCodeCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  code: z.string().optional(),
  groupCode_actionCode: z.lazy(() => PermissionGroupCodeActionCodeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PermissionWhereInputSchema),z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionWhereInputSchema),z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  groupName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  groupCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  actionName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  actionCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  updaterId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  updatedBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default PermissionWhereUniqueInputSchema;
