import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagCreateWithoutQuestionInputSchema } from './QuestionTagCreateWithoutQuestionInputSchema';
import { QuestionTagUncheckedCreateWithoutQuestionInputSchema } from './QuestionTagUncheckedCreateWithoutQuestionInputSchema';

export const QuestionTagCreateOrConnectWithoutQuestionInputSchema: z.ZodType<Prisma.QuestionTagCreateOrConnectWithoutQuestionInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutQuestionInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionInputSchema) ]),
}).strict();

export default QuestionTagCreateOrConnectWithoutQuestionInputSchema;
