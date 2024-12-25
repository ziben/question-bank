import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';
import { QuestionUpdateManyMutationInputSchema } from './QuestionUpdateManyMutationInputSchema';
import { QuestionUncheckedUpdateManyWithoutCategoryInputSchema } from './QuestionUncheckedUpdateManyWithoutCategoryInputSchema';

export const QuestionUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema),z.lazy(() => QuestionUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default QuestionUpdateManyWithWhereWithoutCategoryInputSchema;
