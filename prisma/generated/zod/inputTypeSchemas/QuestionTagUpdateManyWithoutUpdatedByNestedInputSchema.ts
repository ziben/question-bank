import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutUpdatedByInputSchema } from './QuestionTagCreateWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionTagUncheckedCreateWithoutUpdatedByInputSchema';
import { QuestionTagCreateOrConnectWithoutUpdatedByInputSchema } from './QuestionTagCreateOrConnectWithoutUpdatedByInputSchema';
import { QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { QuestionTagCreateManyUpdatedByInputEnvelopeSchema } from './QuestionTagCreateManyUpdatedByInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { QuestionTagUpdateManyWithWhereWithoutUpdatedByInputSchema } from './QuestionTagUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';

export const QuestionTagUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.QuestionTagUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionTagUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => QuestionTagUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionTagScalarWhereInputSchema),z.lazy(() => QuestionTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagUpdateManyWithoutUpdatedByNestedInputSchema;
