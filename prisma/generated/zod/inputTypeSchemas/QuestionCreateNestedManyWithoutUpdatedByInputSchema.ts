import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutUpdatedByInputSchema } from './QuestionCreateWithoutUpdatedByInputSchema';
import { QuestionUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionUncheckedCreateWithoutUpdatedByInputSchema';
import { QuestionCreateOrConnectWithoutUpdatedByInputSchema } from './QuestionCreateOrConnectWithoutUpdatedByInputSchema';
import { QuestionCreateManyUpdatedByInputEnvelopeSchema } from './QuestionCreateManyUpdatedByInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionCreateNestedManyWithoutUpdatedByInputSchema;
