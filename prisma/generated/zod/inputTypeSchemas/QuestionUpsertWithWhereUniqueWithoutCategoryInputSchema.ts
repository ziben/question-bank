import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutCategoryInputSchema } from './QuestionUpdateWithoutCategoryInputSchema';
import { QuestionUncheckedUpdateWithoutCategoryInputSchema } from './QuestionUncheckedUpdateWithoutCategoryInputSchema';
import { QuestionCreateWithoutCategoryInputSchema } from './QuestionCreateWithoutCategoryInputSchema';
import { QuestionUncheckedCreateWithoutCategoryInputSchema } from './QuestionUncheckedCreateWithoutCategoryInputSchema';

export const QuestionUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutCategoryInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutCategoryInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default QuestionUpsertWithWhereUniqueWithoutCategoryInputSchema;
