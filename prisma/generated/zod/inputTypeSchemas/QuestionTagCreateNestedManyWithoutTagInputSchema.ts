import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateWithoutTagInputSchema } from './QuestionTagCreateWithoutTagInputSchema';
import { QuestionTagUncheckedCreateWithoutTagInputSchema } from './QuestionTagUncheckedCreateWithoutTagInputSchema';
import { QuestionTagCreateOrConnectWithoutTagInputSchema } from './QuestionTagCreateOrConnectWithoutTagInputSchema';
import { QuestionTagCreateManyTagInputEnvelopeSchema } from './QuestionTagCreateManyTagInputEnvelopeSchema';
import { QuestionTagWhereUniqueInputSchema } from './QuestionTagWhereUniqueInputSchema';

export const QuestionTagCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => QuestionTagCreateWithoutTagInputSchema),z.lazy(() => QuestionTagCreateWithoutTagInputSchema).array(),z.lazy(() => QuestionTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => QuestionTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => QuestionTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionTagCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionTagWhereUniqueInputSchema),z.lazy(() => QuestionTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionTagCreateNestedManyWithoutTagInputSchema;
