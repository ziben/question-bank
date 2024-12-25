import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedManyWithoutCategoryInputSchema } from './TagCreateNestedManyWithoutCategoryInputSchema';
import { UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema } from './UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema';

export const TagCategoryCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCategoryCreateWithoutCreatedByInput> = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  allowMultiple: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutCategoryInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedTagCategoriesInputSchema).optional()
}).strict();

export default TagCategoryCreateWithoutCreatedByInputSchema;
