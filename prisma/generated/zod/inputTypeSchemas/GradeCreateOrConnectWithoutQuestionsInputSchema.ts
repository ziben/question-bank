import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeCreateWithoutQuestionsInputSchema } from './GradeCreateWithoutQuestionsInputSchema';
import { GradeUncheckedCreateWithoutQuestionsInputSchema } from './GradeUncheckedCreateWithoutQuestionsInputSchema';

export const GradeCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.GradeCreateOrConnectWithoutQuestionsInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeCreateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();

export default GradeCreateOrConnectWithoutQuestionsInputSchema;
