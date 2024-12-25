import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';
import { QuestionTagUpdateManyMutationInputSchema } from './QuestionTagUpdateManyMutationInputSchema';
import { QuestionTagUncheckedUpdateManyWithoutQuestionInputSchema } from './QuestionTagUncheckedUpdateManyWithoutQuestionInputSchema';

export const QuestionTagUpdateManyWithWhereWithoutQuestionInputSchema: z.ZodType<Prisma.QuestionTagUpdateManyWithWhereWithoutQuestionInput> = z.object({
  where: z.lazy(() => QuestionTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionTagUpdateManyMutationInputSchema),z.lazy(() => QuestionTagUncheckedUpdateManyWithoutQuestionInputSchema) ]),
}).strict();

export default QuestionTagUpdateManyWithWhereWithoutQuestionInputSchema;
