import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutGradeInputSchema } from './QuestionUpdateWithoutGradeInputSchema';
import { QuestionUncheckedUpdateWithoutGradeInputSchema } from './QuestionUncheckedUpdateWithoutGradeInputSchema';

export const QuestionUpdateWithWhereUniqueWithoutGradeInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutGradeInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutGradeInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutGradeInputSchema) ]),
}).strict();

export default QuestionUpdateWithWhereUniqueWithoutGradeInputSchema;
