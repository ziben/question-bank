import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';
import { QuestionTagUpdateManyMutationInputSchema } from './QuestionTagUpdateManyMutationInputSchema';
import { QuestionTagUncheckedUpdateManyWithoutCreatedByInputSchema } from './QuestionTagUncheckedUpdateManyWithoutCreatedByInputSchema';

export const QuestionTagUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => QuestionTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateManyMutationInputSchema),z.lazy(() => QuestionTagUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default QuestionTagUpdateManyWithWhereWithoutCreatedByInputSchema;
