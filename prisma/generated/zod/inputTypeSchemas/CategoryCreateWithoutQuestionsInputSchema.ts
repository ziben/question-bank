import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedCategoriesInputSchema } from './UserCreateNestedOneWithoutCreatedCategoriesInputSchema';
import { UserCreateNestedOneWithoutUpdatedCategoriesInputSchema } from './UserCreateNestedOneWithoutUpdatedCategoriesInputSchema';

export const CategoryCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutQuestionsInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedCategoriesInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedCategoriesInputSchema)
}).strict();

export default CategoryCreateWithoutQuestionsInputSchema;
