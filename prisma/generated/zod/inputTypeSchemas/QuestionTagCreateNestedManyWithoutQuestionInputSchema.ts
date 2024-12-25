import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutQuestionInputSchema } from './QuestionTagCreateWithoutQuestionInputSchema';
import { QuestionTagUncheckedCreateWithoutQuestionInputSchema } from './QuestionTagUncheckedCreateWithoutQuestionInputSchema';
import { QuestionTagCreateOrConnectWithoutQuestionInputSchema } from './QuestionTagCreateOrConnectWithoutQuestionInputSchema';
import { QuestionTagCreateManyQuestionInputEnvelopeSchema } from './QuestionTagCreateManyQuestionInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';

export const QuestionTagCreateNestedManyWithoutQuestionInputSchema: z.ZodType<Prisma.QuestionTagCreateNestedManyWithoutQuestionInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutQuestionInputSchema),z.lazy(() => QuestionTagCreateWithoutQuestionInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutQuestionInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutQuestionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyQuestionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagCreateNestedManyWithoutQuestionInputSchema;
