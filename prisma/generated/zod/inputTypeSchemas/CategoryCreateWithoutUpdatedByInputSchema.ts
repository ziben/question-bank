import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutCategoryInputSchema } from './QuestionCreateNestedManyWithoutCategoryInputSchema';
import { UserCreateNestedOneWithoutCreatedCategoriesInputSchema } from './UserCreateNestedOneWithoutCreatedCategoriesInputSchema';

export const CategoryCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.CategoryCreateWithoutUpdatedByInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutCategoryInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedCategoriesInputSchema)
}).strict();

export default CategoryCreateWithoutUpdatedByInputSchema;
