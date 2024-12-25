import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutCreatedByInputSchema } from './QuestionTagCreateWithoutCreatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutCreatedByInputSchema } from './QuestionTagUncheckedCreateWithoutCreatedByInputSchema';
import { QuestionTagCreateOrConnectWithoutCreatedByInputSchema } from './QuestionTagCreateOrConnectWithoutCreatedByInputSchema';
import { QuestionTagCreateManyCreatedByInputEnvelopeSchema } from './QuestionTagCreateManyCreatedByInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';

export const QuestionTagCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagCreateWithoutCreatedByInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagCreateNestedManyWithoutCreatedByInputSchema;
