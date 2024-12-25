import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';
import { QuestionUpdateManyMutationInputSchema } from './QuestionUpdateManyMutationInputSchema';
import { QuestionUncheckedUpdateManyWithoutGradeInputSchema } from './QuestionUncheckedUpdateManyWithoutGradeInputSchema';

export const QuestionUpdateManyWithWhereWithoutGradeInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutGradeInput> = z.object({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema),z.lazy(() => QuestionUncheckedUpdateManyWithoutGradeInputSchema) ]),
}).strict();

export default QuestionUpdateManyWithWhereWithoutGradeInputSchema;
