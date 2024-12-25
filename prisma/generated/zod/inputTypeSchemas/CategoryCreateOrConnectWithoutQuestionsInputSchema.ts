import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutQuestionsInputSchema } from './CategoryCreateWithoutQuestionsInputSchema';
import { CategoryUncheckedCreateWithoutQuestionsInputSchema } from './CategoryUncheckedCreateWithoutQuestionsInputSchema';

export const CategoryCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutQuestionsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutQuestionsInputSchema;
