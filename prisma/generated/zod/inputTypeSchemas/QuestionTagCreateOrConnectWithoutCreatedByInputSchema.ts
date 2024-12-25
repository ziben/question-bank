import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagCreateWithoutCreatedByInputSchema } from './QuestionTagCreateWithoutCreatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutCreatedByInputSchema } from './QuestionTagUncheckedCreateWithoutCreatedByInputSchema';

export const QuestionTagCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionTagCreateOrConnectWithoutCreatedByInputSchema;
