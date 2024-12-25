import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema';
import { SubjectUpdateWithoutQuestionsInputSchema } from './SubjectUpdateWithoutQuestionsInputSchema';
import { SubjectUncheckedUpdateWithoutQuestionsInputSchema } from './SubjectUncheckedUpdateWithoutQuestionsInputSchema';

export const SubjectUpdateToOneWithWhereWithoutQuestionsInputSchema: z.ZodType<Prisma.SubjectUpdateToOneWithWhereWithoutQuestionsInput> = z.object({
  where: z.lazy(() => SubjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutQuestionsInputSchema) ]),
}).strict();

export default SubjectUpdateToOneWithWhereWithoutQuestionsInputSchema;
