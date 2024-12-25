import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutUpdatedByInputSchema } from './QuestionCreateWithoutUpdatedByInputSchema';
import { QuestionUncheckedCreateWithoutUpdatedByInputSchema } from './QuestionUncheckedCreateWithoutUpdatedByInputSchema';
import { QuestionCreateOrConnectWithoutUpdatedByInputSchema } from './QuestionCreateOrConnectWithoutUpdatedByInputSchema';
import { QuestionUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './QuestionUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { QuestionCreateManyUpdatedByInputEnvelopeSchema } from './QuestionCreateManyUpdatedByInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './QuestionUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { QuestionUpdateManyWithWhereWithoutUpdatedByInputSchema } from './QuestionUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';

export const QuestionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => QuestionUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => QuestionUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => QuestionUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema),z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema;
