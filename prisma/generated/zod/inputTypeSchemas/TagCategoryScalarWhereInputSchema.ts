import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const TagCategoryScalarWhereInputSchema: z.ZodType<Prisma.TagCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagCategoryScalarWhereInputSchema),z.lazy(() => TagCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagCategoryScalarWhereInputSchema),z.lazy(() => TagCategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowMultiple: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default TagCategoryScalarWhereInputSchema;
