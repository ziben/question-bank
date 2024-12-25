import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutCreatedByInputSchema } from './QuestionUpdateWithoutCreatedByInputSchema';
import { QuestionUncheckedUpdateWithoutCreatedByInputSchema } from './QuestionUncheckedUpdateWithoutCreatedByInputSchema';

export const QuestionUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutCreatedByInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionUpdateWithWhereUniqueWithoutCreatedByInputSchema;
