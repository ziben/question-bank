import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryWhereInputSchema } from './TagCategoryWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { UserNullableScalarRelationFilterSchema } from './UserNullableScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const TagCategoryWhereUniqueInputSchema: z.ZodType<Prisma.TagCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string(),
    code: z.string()
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    code: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
    code: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => TagCategoryWhereInputSchema),z.lazy(() => TagCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagCategoryWhereInputSchema),z.lazy(() => TagCategoryWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  allowMultiple: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  createdBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export default TagCategoryWhereUniqueInputSchema;
