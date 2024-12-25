import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceUpdateWithoutQuestionsInputSchema } from './SourceUpdateWithoutQuestionsInputSchema';
import { SourceUncheckedUpdateWithoutQuestionsInputSchema } from './SourceUncheckedUpdateWithoutQuestionsInputSchema';
import { SourceCreateWithoutQuestionsInputSchema } from './SourceCreateWithoutQuestionsInputSchema';
import { SourceUncheckedCreateWithoutQuestionsInputSchema } from './SourceUncheckedCreateWithoutQuestionsInputSchema';
import { SourceWhereInputSchema } from './SourceWhereInputSchema';

export const SourceUpsertWithoutQuestionsInputSchema: z.ZodType<Prisma.SourceUpsertWithoutQuestionsInput> = z.object({
  update: z.union([ z.lazy(() => SourceUpdateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutQuestionsInputSchema) ]),
  create: z.union([ z.lazy(() => SourceCreateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedCreateWithoutQuestionsInputSchema) ]),
  where: z.lazy(() => SourceWhereInputSchema).optional()
}).strict();

export default SourceUpsertWithoutQuestionsInputSchema;
