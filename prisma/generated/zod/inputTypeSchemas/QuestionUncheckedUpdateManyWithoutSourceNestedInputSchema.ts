import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutSourceInputSchema } from './QuestionCreateWithoutSourceInputSchema';
import { QuestionUncheckedCreateWithoutSourceInputSchema } from './QuestionUncheckedCreateWithoutSourceInputSchema';
import { QuestionCreateOrConnectWithoutSourceInputSchema } from './QuestionCreateOrConnectWithoutSourceInputSchema';
import { QuestionUpsertWithWhereUniqueWithoutSourceInputSchema } from './QuestionUpsertWithWhereUniqueWithoutSourceInputSchema';
import { QuestionCreateManySourceInputEnvelopeSchema } from './QuestionCreateManySourceInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithWhereUniqueWithoutSourceInputSchema } from './QuestionUpdateWithWhereUniqueWithoutSourceInputSchema';
import { QuestionUpdateManyWithWhereWithoutSourceInputSchema } from './QuestionUpdateManyWithWhereWithoutSourceInputSchema';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';

export const QuestionUncheckedUpdateManyWithoutSourceNestedInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutSourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutSourceInputSchema),z.lazy(() => QuestionCreateWithoutSourceInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutSourceInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutSourceInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutSourceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutSourceInputSchema),z.lazy(() => QuestionUpsertWithWhereUniqueWithoutSourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManySourceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutSourceInputSchema),z.lazy(() => QuestionUpdateWithWhereUniqueWithoutSourceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutSourceInputSchema),z.lazy(() => QuestionUpdateManyWithWhereWithoutSourceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema),z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionUncheckedUpdateManyWithoutSourceNestedInputSchema;
