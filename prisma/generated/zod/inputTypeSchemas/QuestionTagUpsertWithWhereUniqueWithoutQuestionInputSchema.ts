import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutQuestionInputSchema } from './QuestionTagUpdateWithoutQuestionInputSchema';
import { QuestionTagUncheckedUpdateWithoutQuestionInputSchema } from './QuestionTagUncheckedUpdateWithoutQuestionInputSchema';
import { QuestionTagCreateWithoutQuestionInputSchema } from './QuestionTagCreateWithoutQuestionInputSchema';
import { QuestionTagUncheckedCreateWithoutQuestionInputSchema } from './QuestionTagUncheckedCreateWithoutQuestionInputSchema';

export const QuestionTagUpsertWithWhereUniqueWithoutQuestionInputSchema: z.ZodType<Prisma.QuestionTagUpsertWithWhereUniqueWithoutQuestionInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithoutQuestionInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutQuestionInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutQuestionInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionInputSchema) ]),
}).strict();

export default QuestionTagUpsertWithWhereUniqueWithoutQuestionInputSchema;
