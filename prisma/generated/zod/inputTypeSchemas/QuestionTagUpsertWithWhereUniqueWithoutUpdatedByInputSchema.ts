import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutUpdatedByInputSchema } from './QuestionTagUpdateWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedUpdateWithoutUpdatedByInputSchema } from './QuestionTagUncheckedUpdateWithoutUpdatedByInputSchema';
import { QuestionTagCreateWithoutUpdatedByInputSchema } from './QuestionTagCreateWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionTagUncheckedCreateWithoutUpdatedByInputSchema';

export const QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
