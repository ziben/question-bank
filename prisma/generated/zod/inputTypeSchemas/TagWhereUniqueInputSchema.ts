import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryIdNameCompoundUniqueInputSchema } from './TagCategoryIdNameCompoundUniqueInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { TagCategoryScalarRelationFilterSchema } from './TagCategoryScalarRelationFilterSchema';
import { TagCategoryWhereInputSchema } from './TagCategoryWhereInputSchema';
import { QuestionTagListRelationFilterSchema } from './QuestionTagListRelationFilterSchema';
import { UserNullableScalarRelationFilterSchema } from './UserNullableScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    categoryId_name: z.lazy(() => TagCategoryIdNameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    categoryId_name: z.lazy(() => TagCategoryIdNameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  categoryId_name: z.lazy(() => TagCategoryIdNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  category: z.union([ z.lazy(() => TagCategoryScalarRelationFilterSchema),z.lazy(() => TagCategoryWhereInputSchema) ]).optional(),
  questionTags: z.lazy(() => QuestionTagListRelationFilterSchema).optional(),
  createdBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export default TagWhereUniqueInputSchema;
