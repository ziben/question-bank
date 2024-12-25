import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutCategoryInputSchema } from './TagCreateWithoutCategoryInputSchema';
import { TagUncheckedCreateWithoutCategoryInputSchema } from './TagUncheckedCreateWithoutCategoryInputSchema';

export const TagCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutCategoryInputSchema),z.lazy(() => TagUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutCategoryInputSchema;
