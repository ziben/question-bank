import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';
import { QuestionUpdateManyMutationInputSchema } from './QuestionUpdateManyMutationInputSchema';
import { QuestionUncheckedUpdateManyWithoutUpdatedByInputSchema } from './QuestionUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const QuestionUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema),z.lazy(() => QuestionUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionUpdateManyWithWhereWithoutUpdatedByInputSchema;
