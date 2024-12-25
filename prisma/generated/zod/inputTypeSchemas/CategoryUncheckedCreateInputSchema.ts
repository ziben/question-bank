import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionUncheckedCreateNestedManyWithoutCategoryInputSchema } from './QuestionUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateInputSchema;
