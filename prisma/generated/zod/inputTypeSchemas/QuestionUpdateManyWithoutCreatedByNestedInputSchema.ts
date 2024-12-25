import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutCreatedByInputSchema } from './QuestionCreateWithoutCreatedByInputSchema';
import { QuestionUncheckedCreateWithoutCreatedByInputSchema } from './QuestionUncheckedCreateWithoutCreatedByInputSchema';
import { QuestionCreateOrConnectWithoutCreatedByInputSchema } from './QuestionCreateOrConnectWithoutCreatedByInputSchema';
import { QuestionUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './QuestionUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { QuestionCreateManyCreatedByInputEnvelopeSchema } from './QuestionCreateManyCreatedByInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './QuestionUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { QuestionUpdateManyWithWhereWithoutCreatedByInputSchema } from './QuestionUpdateManyWithWhereWithoutCreatedByInputSchema';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';

export const QuestionUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionCreateWithoutCreatedByInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => QuestionUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => QuestionUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => QuestionUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema),z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionUpdateManyWithoutCreatedByNestedInputSchema;
