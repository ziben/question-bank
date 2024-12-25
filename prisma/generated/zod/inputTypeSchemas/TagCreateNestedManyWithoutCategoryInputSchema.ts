import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutCategoryInputSchema } from './TagCreateWithoutCategoryInputSchema';
import { TagUncheckedCreateWithoutCategoryInputSchema } from './TagUncheckedCreateWithoutCategoryInputSchema';
import { TagCreateOrConnectWithoutCategoryInputSchema } from './TagCreateOrConnectWithoutCategoryInputSchema';
import { TagCreateManyCategoryInputEnvelopeSchema } from './TagCreateManyCategoryInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutCategoryInputSchema),z.lazy(() => TagCreateWithoutCategoryInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => TagUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => TagCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutCategoryInputSchema;
