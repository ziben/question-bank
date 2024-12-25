import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutCreatedByInputSchema } from './QuestionTagCreateWithoutCreatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutCreatedByInputSchema } from './QuestionTagUncheckedCreateWithoutCreatedByInputSchema';
import { QuestionTagCreateOrConnectWithoutCreatedByInputSchema } from './QuestionTagCreateOrConnectWithoutCreatedByInputSchema';
import { QuestionTagUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './QuestionTagUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { QuestionTagCreateManyCreatedByInputEnvelopeSchema } from './QuestionTagCreateManyCreatedByInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './QuestionTagUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { QuestionTagUpdateManyWithWhereWithoutCreatedByInputSchema } from './QuestionTagUpdateManyWithWhereWithoutCreatedByInputSchema';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';

export const QuestionTagUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.QuestionTagUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagCreateWithoutCreatedByInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionTagUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => QuestionTagUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionTagScalarWhereInputSchema),z.lazy(() => QuestionTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagUncheckedUpdateManyWithoutCreatedByNestedInputSchema;
