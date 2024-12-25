import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutQuestionTagsInputSchema } from './TagCreateWithoutQuestionTagsInputSchema';
import { TagUncheckedCreateWithoutQuestionTagsInputSchema } from './TagUncheckedCreateWithoutQuestionTagsInputSchema';
import { TagCreateOrConnectWithoutQuestionTagsInputSchema } from './TagCreateOrConnectWithoutQuestionTagsInputSchema';
import { TagUpsertWithoutQuestionTagsInputSchema } from './TagUpsertWithoutQuestionTagsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutQuestionTagsInputSchema } from './TagUpdateToOneWithWhereWithoutQuestionTagsInputSchema';
import { TagUpdateWithoutQuestionTagsInputSchema } from './TagUpdateWithoutQuestionTagsInputSchema';
import { TagUncheckedUpdateWithoutQuestionTagsInputSchema } from './TagUncheckedUpdateWithoutQuestionTagsInputSchema';

export const TagUpdateOneRequiredWithoutQuestionTagsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutQuestionTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutQuestionTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutQuestionTagsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutQuestionTagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutQuestionTagsInputSchema),z.lazy(() => TagUpdateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutQuestionTagsInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutQuestionTagsNestedInputSchema;
