import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutQuestionsInputSchema } from './GradeCreateWithoutQuestionsInputSchema';
import { GradeUncheckedCreateWithoutQuestionsInputSchema } from './GradeUncheckedCreateWithoutQuestionsInputSchema';
import { GradeCreateOrConnectWithoutQuestionsInputSchema } from './GradeCreateOrConnectWithoutQuestionsInputSchema';
import { GradeUpsertWithoutQuestionsInputSchema } from './GradeUpsertWithoutQuestionsInputSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateToOneWithWhereWithoutQuestionsInputSchema } from './GradeUpdateToOneWithWhereWithoutQuestionsInputSchema';
import { GradeUpdateWithoutQuestionsInputSchema } from './GradeUpdateWithoutQuestionsInputSchema';
import { GradeUncheckedUpdateWithoutQuestionsInputSchema } from './GradeUncheckedUpdateWithoutQuestionsInputSchema';

export const GradeUpdateOneRequiredWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.GradeUpdateOneRequiredWithoutQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeCreateOrConnectWithoutQuestionsInputSchema).optional(),
  upsert: z.lazy(() => GradeUpsertWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => GradeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GradeUpdateToOneWithWhereWithoutQuestionsInputSchema),z.lazy(() => GradeUpdateWithoutQuestionsInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutQuestionsInputSchema) ]).optional(),
}).strict();

export default GradeUpdateOneRequiredWithoutQuestionsNestedInputSchema;
