import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryUpdateWithoutQuestionsInputSchema } from './CategoryUpdateWithoutQuestionsInputSchema';
import { CategoryUncheckedUpdateWithoutQuestionsInputSchema } from './CategoryUncheckedUpdateWithoutQuestionsInputSchema';
import { CategoryCreateWithoutQuestionsInputSchema } from './CategoryCreateWithoutQuestionsInputSchema';
import { CategoryUncheckedCreateWithoutQuestionsInputSchema } from './CategoryUncheckedCreateWithoutQuestionsInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutQuestionsInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutQuestionsInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutQuestionsInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export default CategoryUpsertWithoutQuestionsInputSchema;
