import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutGradeInputSchema } from './QuestionCreateWithoutGradeInputSchema';
import { QuestionUncheckedCreateWithoutGradeInputSchema } from './QuestionUncheckedCreateWithoutGradeInputSchema';
import { QuestionCreateOrConnectWithoutGradeInputSchema } from './QuestionCreateOrConnectWithoutGradeInputSchema';
import { QuestionCreateManyGradeInputEnvelopeSchema } from './QuestionCreateManyGradeInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionUncheckedCreateNestedManyWithoutGradeInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutGradeInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutGradeInputSchema),z.lazy(() => QuestionCreateWithoutGradeInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutGradeInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutGradeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutGradeInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutGradeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyGradeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionUncheckedCreateNestedManyWithoutGradeInputSchema;
