import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutCreatedByInputSchema } from './QuestionTagUpdateWithoutCreatedByInputSchema';
import { QuestionTagUncheckedUpdateWithoutCreatedByInputSchema } from './QuestionTagUncheckedUpdateWithoutCreatedByInputSchema';
import { QuestionTagCreateWithoutCreatedByInputSchema } from './QuestionTagCreateWithoutCreatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutCreatedByInputSchema } from './QuestionTagUncheckedCreateWithoutCreatedByInputSchema';

export const QuestionTagUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionTagUpsertWithWhereUniqueWithoutCreatedByInputSchema;
