import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutCategoryInputSchema } from './QuestionUpdateWithoutCategoryInputSchema';
import { QuestionUncheckedUpdateWithoutCategoryInputSchema } from './QuestionUncheckedUpdateWithoutCategoryInputSchema';

export const QuestionUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutCategoryInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default QuestionUpdateWithWhereUniqueWithoutCategoryInputSchema;
