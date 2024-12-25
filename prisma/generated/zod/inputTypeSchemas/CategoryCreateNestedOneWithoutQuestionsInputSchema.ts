import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutQuestionsInputSchema } from './CategoryCreateWithoutQuestionsInputSchema';
import { CategoryUncheckedCreateWithoutQuestionsInputSchema } from './CategoryUncheckedCreateWithoutQuestionsInputSchema';
import { CategoryCreateOrConnectWithoutQuestionsInputSchema } from './CategoryCreateOrConnectWithoutQuestionsInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutQuestionsInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export default CategoryCreateNestedOneWithoutQuestionsInputSchema;
