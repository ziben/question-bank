import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutUpdatedByInputSchema } from './QuestionUpdateWithoutUpdatedByInputSchema';
import { QuestionUncheckedUpdateWithoutUpdatedByInputSchema } from './QuestionUncheckedUpdateWithoutUpdatedByInputSchema';
import { QuestionCreateWithoutUpdatedByInputSchema } from './QuestionCreateWithoutUpdatedByInputSchema';
import { QuestionUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionUncheckedCreateWithoutUpdatedByInputSchema';

export const QuestionUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutUpdatedByInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
