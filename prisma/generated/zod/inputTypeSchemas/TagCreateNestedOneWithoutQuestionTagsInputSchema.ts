import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutQuestionTagsInputSchema } from './TagCreateWithoutQuestionTagsInputSchema';
import { TagUncheckedCreateWithoutQuestionTagsInputSchema } from './TagUncheckedCreateWithoutQuestionTagsInputSchema';
import { TagCreateOrConnectWithoutQuestionTagsInputSchema } from './TagCreateOrConnectWithoutQuestionTagsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutQuestionTagsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutQuestionTagsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutQuestionTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutQuestionTagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutQuestionTagsInputSchema;
