import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';
import { QuestionTagUpdateManyMutationInputSchema } from './QuestionTagUpdateManyMutationInputSchema';
import { QuestionTagUncheckedUpdateManyWithoutUpdatedByInputSchema } from './QuestionTagUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const QuestionTagUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => QuestionTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateManyMutationInputSchema),z.lazy(() => QuestionTagUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default QuestionTagUpdateManyWithWhereWithoutUpdatedByInputSchema;
