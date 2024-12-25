import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutUpdatedByInputSchema } from './QuestionUpdateWithoutUpdatedByInputSchema';
import { QuestionUncheckedUpdateWithoutUpdatedByInputSchema } from './QuestionUncheckedUpdateWithoutUpdatedByInputSchema';

export const QuestionUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutUpdatedByInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
