import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagCreateWithoutTagInputSchema } from './QuestionTagCreateWithoutTagInputSchema';
import { QuestionTagUncheckedCreateWithoutTagInputSchema } from './QuestionTagUncheckedCreateWithoutTagInputSchema';

export const QuestionTagCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutTagInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default QuestionTagCreateOrConnectWithoutTagInputSchema;
