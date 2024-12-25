import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const SourceScalarWhereInputSchema: z.ZodType<Prisma.SourceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SourceScalarWhereInputSchema),z.lazy(() => SourceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SourceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SourceScalarWhereInputSchema),z.lazy(() => SourceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  updaterId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default SourceScalarWhereInputSchema;
