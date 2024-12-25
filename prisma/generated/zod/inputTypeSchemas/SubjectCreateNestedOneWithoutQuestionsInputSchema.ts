import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutQuestionsInputSchema } from './SubjectCreateWithoutQuestionsInputSchema';
import { SubjectUncheckedCreateWithoutQuestionsInputSchema } from './SubjectUncheckedCreateWithoutQuestionsInputSchema';
import { SubjectCreateOrConnectWithoutQuestionsInputSchema } from './SubjectCreateOrConnectWithoutQuestionsInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectCreateNestedOneWithoutQuestionsInputSchema: z.ZodType<Prisma.SubjectCreateNestedOneWithoutQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubjectCreateOrConnectWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => SubjectWhereUniqueInputSchema).optional()
}).strict();

export default SubjectCreateNestedOneWithoutQuestionsInputSchema;
