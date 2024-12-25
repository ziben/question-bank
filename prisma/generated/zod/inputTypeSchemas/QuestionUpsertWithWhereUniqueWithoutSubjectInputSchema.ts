import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutSubjectInputSchema } from './QuestionUpdateWithoutSubjectInputSchema';
import { QuestionUncheckedUpdateWithoutSubjectInputSchema } from './QuestionUncheckedUpdateWithoutSubjectInputSchema';
import { QuestionCreateWithoutSubjectInputSchema } from './QuestionCreateWithoutSubjectInputSchema';
import { QuestionUncheckedCreateWithoutSubjectInputSchema } from './QuestionUncheckedCreateWithoutSubjectInputSchema';

export const QuestionUpsertWithWhereUniqueWithoutSubjectInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutSubjectInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutSubjectInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutSubjectInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutSubjectInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSubjectInputSchema) ]),
}).strict();

export default QuestionUpsertWithWhereUniqueWithoutSubjectInputSchema;
