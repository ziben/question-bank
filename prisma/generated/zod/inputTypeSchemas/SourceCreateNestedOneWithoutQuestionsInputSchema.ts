import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateWithoutQuestionsInputSchema } from './SourceCreateWithoutQuestionsInputSchema';
import { SourceUncheckedCreateWithoutQuestionsInputSchema } from './SourceUncheckedCreateWithoutQuestionsInputSchema';
import { SourceCreateOrConnectWithoutQuestionsInputSchema } from './SourceCreateOrConnectWithoutQuestionsInputSchema';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';

export const SourceCreateNestedOneWithoutQuestionsInputSchema: z.ZodType<Prisma.SourceCreateNestedOneWithoutQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => SourceCreateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SourceCreateOrConnectWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => SourceWhereUniqueInputSchema).optional()
}).strict();

export default SourceCreateNestedOneWithoutQuestionsInputSchema;
