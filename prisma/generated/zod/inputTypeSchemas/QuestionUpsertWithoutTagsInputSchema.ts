import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionUpdateWithoutTagsInputSchema } from './QuestionUpdateWithoutTagsInputSchema';
import { QuestionUncheckedUpdateWithoutTagsInputSchema } from './QuestionUncheckedUpdateWithoutTagsInputSchema';
import { QuestionCreateWithoutTagsInputSchema } from './QuestionCreateWithoutTagsInputSchema';
import { QuestionUncheckedCreateWithoutTagsInputSchema } from './QuestionUncheckedCreateWithoutTagsInputSchema';
import { QuestionWhereInputSchema } from './QuestionWhereInputSchema';

export const QuestionUpsertWithoutTagsInputSchema: z.ZodType<Prisma.QuestionUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => QuestionUpdateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => QuestionWhereInputSchema).optional()
}).strict();

export default QuestionUpsertWithoutTagsInputSchema;
