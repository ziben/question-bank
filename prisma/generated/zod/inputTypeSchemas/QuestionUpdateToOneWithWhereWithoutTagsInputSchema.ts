import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereInputSchema } from './QuestionWhereInputSchema';
import { QuestionUpdateWithoutTagsInputSchema } from './QuestionUpdateWithoutTagsInputSchema';
import { QuestionUncheckedUpdateWithoutTagsInputSchema } from './QuestionUncheckedUpdateWithoutTagsInputSchema';

export const QuestionUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.QuestionUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => QuestionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default QuestionUpdateToOneWithWhereWithoutTagsInputSchema;
