import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SystemLogScalarWhereInputSchema: z.ZodType<Prisma.SystemLogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SystemLogScalarWhereInputSchema),z.lazy(() => SystemLogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SystemLogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SystemLogScalarWhereInputSchema),z.lazy(() => SystemLogScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  module: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  target: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  targetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ip: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SystemLogScalarWhereInputSchema;
