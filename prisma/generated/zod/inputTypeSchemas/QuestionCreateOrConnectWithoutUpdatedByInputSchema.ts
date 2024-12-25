import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutUpdatedByInputSchema } from './QuestionCreateWithoutUpdatedByInputSchema';
import { QuestionUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionUncheckedCreateWithoutUpdatedByInputSchema';

export const QuestionCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutUpdatedByInputSchema;
