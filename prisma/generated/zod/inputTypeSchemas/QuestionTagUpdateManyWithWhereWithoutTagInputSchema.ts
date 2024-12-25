import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';
import { QuestionTagUpdateManyMutationInputSchema } from './QuestionTagUpdateManyMutationInputSchema';
import { QuestionTagUncheckedUpdateManyWithoutTagInputSchema } from './QuestionTagUncheckedUpdateManyWithoutTagInputSchema';

export const QuestionTagUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => QuestionTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateManyMutationInputSchema),z.lazy(() => QuestionTagUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default QuestionTagUpdateManyWithWhereWithoutTagInputSchema;
