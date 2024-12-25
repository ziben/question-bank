import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';
import { QuestionUpdateManyMutationInputSchema } from './QuestionUpdateManyMutationInputSchema';
import { QuestionUncheckedUpdateManyWithoutSubjectInputSchema } from './QuestionUncheckedUpdateManyWithoutSubjectInputSchema';

export const QuestionUpdateManyWithWhereWithoutSubjectInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutSubjectInput> = z.object({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema),z.lazy(() => QuestionUncheckedUpdateManyWithoutSubjectInputSchema) ]),
}).strict();

export default QuestionUpdateManyWithWhereWithoutSubjectInputSchema;
