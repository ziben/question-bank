import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutSubjectInputSchema } from './QuestionCreateWithoutSubjectInputSchema';
import { QuestionUncheckedCreateWithoutSubjectInputSchema } from './QuestionUncheckedCreateWithoutSubjectInputSchema';

export const QuestionCreateOrConnectWithoutSubjectInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutSubjectInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutSubjectInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSubjectInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutSubjectInputSchema;
