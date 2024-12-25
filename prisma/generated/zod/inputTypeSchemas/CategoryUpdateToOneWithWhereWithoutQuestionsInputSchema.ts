import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutQuestionsInputSchema } from './CategoryUpdateWithoutQuestionsInputSchema';
import { CategoryUncheckedUpdateWithoutQuestionsInputSchema } from './CategoryUncheckedUpdateWithoutQuestionsInputSchema';

export const CategoryUpdateToOneWithWhereWithoutQuestionsInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutQuestionsInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutQuestionsInputSchema) ]),
}).strict();

export default CategoryUpdateToOneWithWhereWithoutQuestionsInputSchema;
