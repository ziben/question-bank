import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutCreatedByInputSchema } from './QuestionCreateWithoutCreatedByInputSchema';
import { QuestionUncheckedCreateWithoutCreatedByInputSchema } from './QuestionUncheckedCreateWithoutCreatedByInputSchema';

export const QuestionCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutCreatedByInputSchema;
