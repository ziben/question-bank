import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereInputSchema } from './SourceWhereInputSchema';
import { SourceUpdateWithoutQuestionsInputSchema } from './SourceUpdateWithoutQuestionsInputSchema';
import { SourceUncheckedUpdateWithoutQuestionsInputSchema } from './SourceUncheckedUpdateWithoutQuestionsInputSchema';

export const SourceUpdateToOneWithWhereWithoutQuestionsInputSchema: z.ZodType<Prisma.SourceUpdateToOneWithWhereWithoutQuestionsInput> = z.object({
  where: z.lazy(() => SourceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SourceUpdateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutQuestionsInputSchema) ]),
}).strict();

export default SourceUpdateToOneWithWhereWithoutQuestionsInputSchema;
