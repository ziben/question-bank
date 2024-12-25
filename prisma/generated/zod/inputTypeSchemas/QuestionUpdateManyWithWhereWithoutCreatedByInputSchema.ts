import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';
import { QuestionUpdateManyMutationInputSchema } from './QuestionUpdateManyMutationInputSchema';
import { QuestionUncheckedUpdateManyWithoutCreatedByInputSchema } from './QuestionUncheckedUpdateManyWithoutCreatedByInputSchema';

export const QuestionUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema),z.lazy(() => QuestionUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionUpdateManyWithWhereWithoutCreatedByInputSchema;
