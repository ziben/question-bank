import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutCreatedByInputSchema } from './QuestionTagUpdateWithoutCreatedByInputSchema';
import { QuestionTagUncheckedUpdateWithoutCreatedByInputSchema } from './QuestionTagUncheckedUpdateWithoutCreatedByInputSchema';

export const QuestionTagUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionTagUpdateWithWhereUniqueWithoutCreatedByInputSchema;
