import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutTagInputSchema } from './QuestionTagCreateWithoutTagInputSchema';
import { QuestionTagUncheckedCreateWithoutTagInputSchema } from './QuestionTagUncheckedCreateWithoutTagInputSchema';
import { QuestionTagCreateOrConnectWithoutTagInputSchema } from './QuestionTagCreateOrConnectWithoutTagInputSchema';
import { QuestionTagUpsertWithWhereUniqueWithoutTagInputSchema } from './QuestionTagUpsertWithWhereUniqueWithoutTagInputSchema';
import { QuestionTagCreateManyTagInputEnvelopeSchema } from './QuestionTagCreateManyTagInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithWhereUniqueWithoutTagInputSchema } from './QuestionTagUpdateWithWhereUniqueWithoutTagInputSchema';
import { QuestionTagUpdateManyWithWhereWithoutTagInputSchema } from './QuestionTagUpdateManyWithWhereWithoutTagInputSchema';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';

export const QuestionTagUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.QuestionTagUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutTagInputSchema),z.lazy(() => QuestionTagCreateWithoutTagInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionTagUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => QuestionTagUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionTagScalarWhereInputSchema),z.lazy(() => QuestionTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagUpdateManyWithoutTagNestedInputSchema;
