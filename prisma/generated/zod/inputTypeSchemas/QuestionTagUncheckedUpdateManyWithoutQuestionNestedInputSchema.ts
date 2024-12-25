import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutQuestionInputSchema } from './QuestionTagCreateWithoutQuestionInputSchema';
import { QuestionTagUncheckedCreateWithoutQuestionInputSchema } from './QuestionTagUncheckedCreateWithoutQuestionInputSchema';
import { QuestionTagCreateOrConnectWithoutQuestionInputSchema } from './QuestionTagCreateOrConnectWithoutQuestionInputSchema';
import { QuestionTagUpsertWithWhereUniqueWithoutQuestionInputSchema } from './QuestionTagUpsertWithWhereUniqueWithoutQuestionInputSchema';
import { QuestionTagCreateManyQuestionInputEnvelopeSchema } from './QuestionTagCreateManyQuestionInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';
import { QuestionTagUpdateWithWhereUniqueWithoutQuestionInputSchema } from './QuestionTagUpdateWithWhereUniqueWithoutQuestionInputSchema';
import { QuestionTagUpdateManyWithWhereWithoutQuestionInputSchema } from './QuestionTagUpdateManyWithWhereWithoutQuestionInputSchema';
import { QuestionTagScalarWhereInputSchema } from './QuestionTagScalarWhereInputSchema';

export const QuestionTagUncheckedUpdateManyWithoutQuestionNestedInputSchema: z.ZodType<Prisma.QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutQuestionInputSchema),z.lazy(() => QuestionTagCreateWithoutQuestionInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutQuestionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutQuestionInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutQuestionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutQuestionInputSchema),z.lazy(() => QuestionTagUpsertWithWhereUniqueWithoutQuestionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyQuestionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutQuestionInputSchema),z.lazy(() => QuestionTagUpdateWithWhereUniqueWithoutQuestionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionTagUpdateManyWithWhereWithoutQuestionInputSchema),z.lazy(() => QuestionTagUpdateManyWithWhereWithoutQuestionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionTagScalarWhereInputSchema),z.lazy(() => QuestionTagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagUncheckedUpdateManyWithoutQuestionNestedInputSchema;
