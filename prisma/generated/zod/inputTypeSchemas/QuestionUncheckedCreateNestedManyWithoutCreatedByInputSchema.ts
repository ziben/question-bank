import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutCreatedByInputSchema } from './QuestionCreateWithoutCreatedByInputSchema';
import { QuestionUncheckedCreateWithoutCreatedByInputSchema } from './QuestionUncheckedCreateWithoutCreatedByInputSchema';
import { QuestionCreateOrConnectWithoutCreatedByInputSchema } from './QuestionCreateOrConnectWithoutCreatedByInputSchema';
import { QuestionCreateManyCreatedByInputEnvelopeSchema } from './QuestionCreateManyCreatedByInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionCreateWithoutCreatedByInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionUncheckedCreateNestedManyWithoutCreatedByInputSchema;
