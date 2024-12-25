import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutQuestionTagsInputSchema } from './TagUpdateWithoutQuestionTagsInputSchema';
import { TagUncheckedUpdateWithoutQuestionTagsInputSchema } from './TagUncheckedUpdateWithoutQuestionTagsInputSchema';

export const TagUpdateToOneWithWhereWithoutQuestionTagsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutQuestionTagsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutQuestionTagsInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutQuestionTagsInputSchema;
