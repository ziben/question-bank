import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectUpdateWithoutQuestionsInputSchema } from './SubjectUpdateWithoutQuestionsInputSchema';
import { SubjectUncheckedUpdateWithoutQuestionsInputSchema } from './SubjectUncheckedUpdateWithoutQuestionsInputSchema';
import { SubjectCreateWithoutQuestionsInputSchema } from './SubjectCreateWithoutQuestionsInputSchema';
import { SubjectUncheckedCreateWithoutQuestionsInputSchema } from './SubjectUncheckedCreateWithoutQuestionsInputSchema';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema';

export const SubjectUpsertWithoutQuestionsInputSchema: z.ZodType<Prisma.SubjectUpsertWithoutQuestionsInput> = z.object({
  update: z.union([ z.lazy(() => SubjectUpdateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQuestionsInputSchema) ]),
  where: z.lazy(() => SubjectWhereInputSchema).optional()
}).strict();

export default SubjectUpsertWithoutQuestionsInputSchema;
