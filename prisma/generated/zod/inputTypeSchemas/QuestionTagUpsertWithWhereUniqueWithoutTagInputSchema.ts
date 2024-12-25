import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithoutTagInputSchema } from './QuestionTagUpdateWithoutTagInputSchema';
import { QuestionTagUncheckedUpdateWithoutTagInputSchema } from './QuestionTagUncheckedUpdateWithoutTagInputSchema';
import { QuestionTagCreateWithoutTagInputSchema } from './QuestionTagCreateWithoutTagInputSchema';
import { QuestionTagUncheckedCreateWithoutTagInputSchema } from './QuestionTagUncheckedCreateWithoutTagInputSchema';

export const QuestionTagUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => QuestionTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithoutTagInputSchema),z.lazy(() => QuestionTagUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutTagInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default QuestionTagUpsertWithWhereUniqueWithoutTagInputSchema;
