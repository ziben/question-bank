import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagCreateWithoutUpdatedByInputSchema } from './QuestionTagCreateWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionTagUncheckedCreateWithoutUpdatedByInputSchema';

export const QuestionTagCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionTagCreateOrConnectWithoutUpdatedByInputSchema;
