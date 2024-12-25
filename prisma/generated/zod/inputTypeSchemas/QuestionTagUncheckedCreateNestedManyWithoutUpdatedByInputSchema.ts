import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutUpdatedByInputSchema } from './QuestionTagCreateWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionTagUncheckedCreateWithoutUpdatedByInputSchema';
import { QuestionTagCreateOrConnectWithoutUpdatedByInputSchema } from './QuestionTagCreateOrConnectWithoutUpdatedByInputSchema';
import { QuestionTagCreateManyUpdatedByInputEnvelopeSchema } from './QuestionTagCreateManyUpdatedByInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';

export const QuestionTagUncheckedCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagUncheckedCreateNestedManyWithoutUpdatedByInputSchema;
