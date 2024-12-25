import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutQuestionsInputSchema } from './SubjectCreateWithoutQuestionsInputSchema';
import { SubjectUncheckedCreateWithoutQuestionsInputSchema } from './SubjectUncheckedCreateWithoutQuestionsInputSchema';

export const SubjectCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutQuestionsInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutQuestionsInputSchema;
