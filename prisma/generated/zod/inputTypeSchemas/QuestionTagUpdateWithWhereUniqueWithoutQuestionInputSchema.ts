import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutQuestionInputSchema } from './QuestionTagUpdateWithoutQuestionInputSchema';
import { QuestionTagUncheckedUpdateWithoutQuestionInputSchema } from './QuestionTagUncheckedUpdateWithoutQuestionInputSchema';

export const QuestionTagUpdateWithWhereUniqueWithoutQuestionInputSchema: z.ZodType<Prisma.QuestionTagUpdateWithWhereUniqueWithoutQuestionInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateWithoutQuestionInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutQuestionInputSchema) ]),
}).strict();

export default QuestionTagUpdateWithWhereUniqueWithoutQuestionInputSchema;
