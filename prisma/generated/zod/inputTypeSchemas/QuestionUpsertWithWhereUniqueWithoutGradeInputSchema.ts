import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutGradeInputSchema } from './QuestionUpdateWithoutGradeInputSchema';
import { QuestionUncheckedUpdateWithoutGradeInputSchema } from './QuestionUncheckedUpdateWithoutGradeInputSchema';
import { QuestionCreateWithoutGradeInputSchema } from './QuestionCreateWithoutGradeInputSchema';
import { QuestionUncheckedCreateWithoutGradeInputSchema } from './QuestionUncheckedCreateWithoutGradeInputSchema';

export const QuestionUpsertWithWhereUniqueWithoutGradeInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutGradeInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutGradeInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutGradeInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutGradeInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutGradeInputSchema) ]),
}).strict();

export default QuestionUpsertWithWhereUniqueWithoutGradeInputSchema;
