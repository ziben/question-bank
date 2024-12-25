import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceCreateWithoutQuestionsInputSchema } from './SourceCreateWithoutQuestionsInputSchema';
import { SourceUncheckedCreateWithoutQuestionsInputSchema } from './SourceUncheckedCreateWithoutQuestionsInputSchema';

export const SourceCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.SourceCreateOrConnectWithoutQuestionsInput> = z.object({
  where: z.lazy(() => SourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SourceCreateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();

export default SourceCreateOrConnectWithoutQuestionsInputSchema;
