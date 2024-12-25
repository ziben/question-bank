import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutCategoryInputSchema } from './TagCreateNestedManyWithoutCategoryInputSchema';
import { UserCreateNestedOneWithoutCreatedTagCategoriesInputSchema } from './UserCreateNestedOneWithoutCreatedTagCategoriesInputSchema';
import { UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema } from './UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema';

export const TagCategoryCreateInputSchema: z.ZodType<Prisma.TagCategoryCreateInput> = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  allowMultiple: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutCategoryInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedTagCategoriesInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema).optional()
}).strict();

export default TagCategoryCreateInputSchema;
