import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutTagsInputSchema } from './QuestionCreateWithoutTagsInputSchema';
import { QuestionUncheckedCreateWithoutTagsInputSchema } from './QuestionUncheckedCreateWithoutTagsInputSchema';
import { QuestionCreateOrConnectWithoutTagsInputSchema } from './QuestionCreateOrConnectWithoutTagsInputSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => QuestionCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => QuestionWhereUniqueInputSchema).optional()
}).strict();

export default QuestionCreateNestedOneWithoutTagsInputSchema;
