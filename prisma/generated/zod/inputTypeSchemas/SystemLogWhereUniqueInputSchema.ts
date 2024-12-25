import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogWhereInputSchema } from './SystemLogWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SystemLogWhereUniqueInputSchema: z.ZodType<Prisma.SystemLogWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => SystemLogWhereInputSchema),z.lazy(() => SystemLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SystemLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SystemLogWhereInputSchema),z.lazy(() => SystemLogWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  module: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  target: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  targetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ip: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default SystemLogWhereUniqueInputSchema;
