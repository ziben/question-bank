import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutCategoryInputSchema } from './QuestionCreateNestedManyWithoutCategoryInputSchema';
import { UserCreateNestedOneWithoutUpdatedCategoriesInputSchema } from './UserCreateNestedOneWithoutUpdatedCategoriesInputSchema';

export const CategoryCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.CategoryCreateWithoutCreatedByInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutCategoryInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedCategoriesInputSchema)
}).strict();

export default CategoryCreateWithoutCreatedByInputSchema;
