import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateWithoutQuestionsInputSchema } from './SourceCreateWithoutQuestionsInputSchema';
import { SourceUncheckedCreateWithoutQuestionsInputSchema } from './SourceUncheckedCreateWithoutQuestionsInputSchema';
import { SourceCreateOrConnectWithoutQuestionsInputSchema } from './SourceCreateOrConnectWithoutQuestionsInputSchema';
import { SourceUpsertWithoutQuestionsInputSchema } from './SourceUpsertWithoutQuestionsInputSchema';
import { SourceWhereInputSchema } from './SourceWhereInputSchema';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateToOneWithWhereWithoutQuestionsInputSchema } from './SourceUpdateToOneWithWhereWithoutQuestionsInputSchema';
import { SourceUpdateWithoutQuestionsInputSchema } from './SourceUpdateWithoutQuestionsInputSchema';
import { SourceUncheckedUpdateWithoutQuestionsInputSchema } from './SourceUncheckedUpdateWithoutQuestionsInputSchema';

export const SourceUpdateOneWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.SourceUpdateOneWithoutQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SourceCreateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SourceCreateOrConnectWithoutQuestionsInputSchema).optional(),
  upsert: z.lazy(() => SourceUpsertWithoutQuestionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SourceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SourceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SourceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SourceUpdateToOneWithWhereWithoutQuestionsInputSchema),z.lazy(() => SourceUpdateWithoutQuestionsInputSchema),z.lazy(() => SourceUncheckedUpdateWithoutQuestionsInputSchema) ]).optional(),
}).strict();

export default SourceUpdateOneWithoutQuestionsNestedInputSchema;
