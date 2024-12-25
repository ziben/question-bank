import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutSubjectInputSchema } from './QuestionCreateWithoutSubjectInputSchema';
import { QuestionUncheckedCreateWithoutSubjectInputSchema } from './QuestionUncheckedCreateWithoutSubjectInputSchema';
import { QuestionCreateOrConnectWithoutSubjectInputSchema } from './QuestionCreateOrConnectWithoutSubjectInputSchema';
import { QuestionUpsertWithWhereUniqueWithoutSubjectInputSchema } from './QuestionUpsertWithWhereUniqueWithoutSubjectInputSchema';
import { QuestionCreateManySubjectInputEnvelopeSchema } from './QuestionCreateManySubjectInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithWhereUniqueWithoutSubjectInputSchema } from './QuestionUpdateWithWhereUniqueWithoutSubjectInputSchema';
import { QuestionUpdateManyWithWhereWithoutSubjectInputSchema } from './QuestionUpdateManyWithWhereWithoutSubjectInputSchema';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';

export const QuestionUpdateManyWithoutSubjectNestedInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithoutSubjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutSubjectInputSchema),z.lazy(() => QuestionCreateWithoutSubjectInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutSubjectInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSubjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutSubjectInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutSubjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutSubjectInputSchema),z.lazy(() => QuestionUpsertWithWhereUniqueWithoutSubjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManySubjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutSubjectInputSchema),z.lazy(() => QuestionUpdateWithWhereUniqueWithoutSubjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutSubjectInputSchema),z.lazy(() => QuestionUpdateManyWithWhereWithoutSubjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema),z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionUpdateManyWithoutSubjectNestedInputSchema;
