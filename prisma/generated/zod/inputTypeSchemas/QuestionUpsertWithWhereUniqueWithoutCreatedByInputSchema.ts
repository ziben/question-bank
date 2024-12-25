import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutCreatedByInputSchema } from './QuestionUpdateWithoutCreatedByInputSchema';
import { QuestionUncheckedUpdateWithoutCreatedByInputSchema } from './QuestionUncheckedUpdateWithoutCreatedByInputSchema';
import { QuestionCreateWithoutCreatedByInputSchema } from './QuestionCreateWithoutCreatedByInputSchema';
import { QuestionUncheckedCreateWithoutCreatedByInputSchema } from './QuestionUncheckedCreateWithoutCreatedByInputSchema';

export const QuestionUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutCreatedByInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionUpsertWithWhereUniqueWithoutCreatedByInputSchema;
