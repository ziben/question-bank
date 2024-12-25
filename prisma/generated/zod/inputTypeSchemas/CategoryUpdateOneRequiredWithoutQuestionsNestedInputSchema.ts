import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutQuestionsInputSchema } from './CategoryCreateWithoutQuestionsInputSchema';
import { CategoryUncheckedCreateWithoutQuestionsInputSchema } from './CategoryUncheckedCreateWithoutQuestionsInputSchema';
import { CategoryCreateOrConnectWithoutQuestionsInputSchema } from './CategoryCreateOrConnectWithoutQuestionsInputSchema';
import { CategoryUpsertWithoutQuestionsInputSchema } from './CategoryUpsertWithoutQuestionsInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutQuestionsInputSchema } from './CategoryUpdateToOneWithWhereWithoutQuestionsInputSchema';
import { CategoryUpdateWithoutQuestionsInputSchema } from './CategoryUpdateWithoutQuestionsInputSchema';
import { CategoryUncheckedUpdateWithoutQuestionsInputSchema } from './CategoryUncheckedUpdateWithoutQuestionsInputSchema';

export const CategoryUpdateOneRequiredWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutQuestionsInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutQuestionsInputSchema),z.lazy(() => CategoryUpdateWithoutQuestionsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutQuestionsInputSchema) ]).optional(),
}).strict();

export default CategoryUpdateOneRequiredWithoutQuestionsNestedInputSchema;
