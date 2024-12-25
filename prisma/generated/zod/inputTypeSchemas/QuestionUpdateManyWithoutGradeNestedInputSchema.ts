import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutGradeInputSchema } from './QuestionCreateWithoutGradeInputSchema';
import { QuestionUncheckedCreateWithoutGradeInputSchema } from './QuestionUncheckedCreateWithoutGradeInputSchema';
import { QuestionCreateOrConnectWithoutGradeInputSchema } from './QuestionCreateOrConnectWithoutGradeInputSchema';
import { QuestionUpsertWithWhereUniqueWithoutGradeInputSchema } from './QuestionUpsertWithWhereUniqueWithoutGradeInputSchema';
import { QuestionCreateManyGradeInputEnvelopeSchema } from './QuestionCreateManyGradeInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithWhereUniqueWithoutGradeInputSchema } from './QuestionUpdateWithWhereUniqueWithoutGradeInputSchema';
import { QuestionUpdateManyWithWhereWithoutGradeInputSchema } from './QuestionUpdateManyWithWhereWithoutGradeInputSchema';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';

export const QuestionUpdateManyWithoutGradeNestedInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithoutGradeNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutGradeInputSchema),z.lazy(() => QuestionCreateWithoutGradeInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutGradeInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutGradeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutGradeInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutGradeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutGradeInputSchema),z.lazy(() => QuestionUpsertWithWhereUniqueWithoutGradeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyGradeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutGradeInputSchema),z.lazy(() => QuestionUpdateWithWhereUniqueWithoutGradeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutGradeInputSchema),z.lazy(() => QuestionUpdateManyWithWhereWithoutGradeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema),z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionUpdateManyWithoutGradeNestedInputSchema;
