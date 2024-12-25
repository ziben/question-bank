import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeUpdateWithoutQuestionsInputSchema } from './GradeUpdateWithoutQuestionsInputSchema';
import { GradeUncheckedUpdateWithoutQuestionsInputSchema } from './GradeUncheckedUpdateWithoutQuestionsInputSchema';
import { GradeCreateWithoutQuestionsInputSchema } from './GradeCreateWithoutQuestionsInputSchema';
import { GradeUncheckedCreateWithoutQuestionsInputSchema } from './GradeUncheckedCreateWithoutQuestionsInputSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';

export const GradeUpsertWithoutQuestionsInputSchema: z.ZodType<Prisma.GradeUpsertWithoutQuestionsInput> = z.object({
  update: z.union([ z.lazy(() => GradeUpdateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => GradeCreateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutQuestionsInputSchema) ]),
  where: z.lazy(() => GradeWhereInputSchema).optional()
}).strict();

export default GradeUpsertWithoutQuestionsInputSchema;
