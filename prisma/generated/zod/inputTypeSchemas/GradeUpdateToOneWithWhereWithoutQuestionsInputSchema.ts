import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { GradeUpdateWithoutQuestionsInputSchema } from './GradeUpdateWithoutQuestionsInputSchema';
import { GradeUncheckedUpdateWithoutQuestionsInputSchema } from './GradeUncheckedUpdateWithoutQuestionsInputSchema';

export const GradeUpdateToOneWithWhereWithoutQuestionsInputSchema: z.ZodType<Prisma.GradeUpdateToOneWithWhereWithoutQuestionsInput> = z.object({
  where: z.lazy(() => GradeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GradeUpdateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutQuestionsInputSchema) ]),
}).strict();

export default GradeUpdateToOneWithWhereWithoutQuestionsInputSchema;
