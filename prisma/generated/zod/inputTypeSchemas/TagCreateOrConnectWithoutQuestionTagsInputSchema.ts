import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutQuestionTagsInputSchema } from './TagCreateWithoutQuestionTagsInputSchema';
import { TagUncheckedCreateWithoutQuestionTagsInputSchema } from './TagUncheckedCreateWithoutQuestionTagsInputSchema';

export const TagCreateOrConnectWithoutQuestionTagsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutQuestionTagsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutQuestionTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutQuestionTagsInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutQuestionTagsInputSchema;
