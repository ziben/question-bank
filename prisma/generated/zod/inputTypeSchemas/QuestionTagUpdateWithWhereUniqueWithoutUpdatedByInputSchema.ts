import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutUpdatedByInputSchema } from './QuestionTagUpdateWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedUpdateWithoutUpdatedByInputSchema } from './QuestionTagUncheckedUpdateWithoutUpdatedByInputSchema';

export const QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
