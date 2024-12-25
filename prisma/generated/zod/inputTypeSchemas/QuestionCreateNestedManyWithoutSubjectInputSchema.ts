import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutSubjectInputSchema } from './QuestionCreateWithoutSubjectInputSchema';
import { QuestionUncheckedCreateWithoutSubjectInputSchema } from './QuestionUncheckedCreateWithoutSubjectInputSchema';
import { QuestionCreateOrConnectWithoutSubjectInputSchema } from './QuestionCreateOrConnectWithoutSubjectInputSchema';
import { QuestionCreateManySubjectInputEnvelopeSchema } from './QuestionCreateManySubjectInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionCreateNestedManyWithoutSubjectInputSchema: z.ZodType<Prisma.QuestionCreateNestedManyWithoutSubjectInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutSubjectInputSchema),z.lazy(() => QuestionCreateWithoutSubjectInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutSubjectInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSubjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutSubjectInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutSubjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManySubjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionCreateNestedManyWithoutSubjectInputSchema;
