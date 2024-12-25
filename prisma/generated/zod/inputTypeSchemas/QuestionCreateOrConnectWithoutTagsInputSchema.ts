import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutTagsInputSchema } from './QuestionCreateWithoutTagsInputSchema';
import { QuestionUncheckedCreateWithoutTagsInputSchema } from './QuestionUncheckedCreateWithoutTagsInputSchema';

export const QuestionCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutTagsInputSchema;
