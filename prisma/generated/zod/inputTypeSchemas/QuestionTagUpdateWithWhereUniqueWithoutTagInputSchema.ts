import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutTagInputSchema } from './QuestionTagUpdateWithoutTagInputSchema';
import { QuestionTagUncheckedUpdateWithoutTagInputSchema } from './QuestionTagUncheckedUpdateWithoutTagInputSchema';

export const QuestionTagUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateWithoutTagInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default QuestionTagUpdateWithWhereUniqueWithoutTagInputSchema;
