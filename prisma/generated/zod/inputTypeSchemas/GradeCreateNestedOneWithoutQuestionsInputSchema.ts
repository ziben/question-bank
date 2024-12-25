import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutQuestionsInputSchema } from './GradeCreateWithoutQuestionsInputSchema';
import { GradeUncheckedCreateWithoutQuestionsInputSchema } from './GradeUncheckedCreateWithoutQuestionsInputSchema';
import { GradeCreateOrConnectWithoutQuestionsInputSchema } from './GradeCreateOrConnectWithoutQuestionsInputSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';

export const GradeCreateNestedOneWithoutQuestionsInputSchema: z.ZodType<Prisma.GradeCreateNestedOneWithoutQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeCreateOrConnectWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => GradeWhereUniqueInputSchema).optional()
}).strict();

export default GradeCreateNestedOneWithoutQuestionsInputSchema;
