import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutCategoryInputSchema } from './QuestionCreateWithoutCategoryInputSchema';
import { QuestionUncheckedCreateWithoutCategoryInputSchema } from './QuestionUncheckedCreateWithoutCategoryInputSchema';

export const QuestionCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutCategoryInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutCategoryInputSchema;
