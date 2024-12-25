import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUpdateWithoutQuestionTagsInputSchema } from './TagUpdateWithoutQuestionTagsInputSchema';
import { TagUncheckedUpdateWithoutQuestionTagsInputSchema } from './TagUncheckedUpdateWithoutQuestionTagsInputSchema';
import { TagCreateWithoutQuestionTagsInputSchema } from './TagCreateWithoutQuestionTagsInputSchema';
import { TagUncheckedCreateWithoutQuestionTagsInputSchema } from './TagUncheckedCreateWithoutQuestionTagsInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutQuestionTagsInputSchema: z.ZodType<Prisma.TagUpsertWithoutQuestionTagsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutQuestionTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutQuestionTagsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutQuestionTagsInputSchema;
