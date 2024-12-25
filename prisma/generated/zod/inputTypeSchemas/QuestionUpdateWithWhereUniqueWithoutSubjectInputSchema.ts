import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutSubjectInputSchema } from './QuestionUpdateWithoutSubjectInputSchema';
import { QuestionUncheckedUpdateWithoutSubjectInputSchema } from './QuestionUncheckedUpdateWithoutSubjectInputSchema';

export const QuestionUpdateWithWhereUniqueWithoutSubjectInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutSubjectInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutSubjectInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutSubjectInputSchema) ]),
}).strict();

export default QuestionUpdateWithWhereUniqueWithoutSubjectInputSchema;
