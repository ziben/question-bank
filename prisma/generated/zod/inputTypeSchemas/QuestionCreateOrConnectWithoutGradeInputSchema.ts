import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutGradeInputSchema } from './QuestionCreateWithoutGradeInputSchema';
import { QuestionUncheckedCreateWithoutGradeInputSchema } from './QuestionUncheckedCreateWithoutGradeInputSchema';

export const QuestionCreateOrConnectWithoutGradeInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutGradeInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutGradeInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutGradeInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutGradeInputSchema;
