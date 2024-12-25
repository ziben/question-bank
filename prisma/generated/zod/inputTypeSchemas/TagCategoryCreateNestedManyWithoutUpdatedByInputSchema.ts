import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateWithoutUpdatedByInputSchema } from './TagCategoryCreateWithoutUpdatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutUpdatedByInputSchema } from './TagCategoryUncheckedCreateWithoutUpdatedByInputSchema';
import { TagCategoryCreateOrConnectWithoutUpdatedByInputSchema } from './TagCategoryCreateOrConnectWithoutUpdatedByInputSchema';
import { TagCategoryCreateManyUpdatedByInputEnvelopeSchema } from './TagCategoryCreateManyUpdatedByInputEnvelopeSchema';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';

export const TagCategoryCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => TagCategoryUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCategoryCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCategoryCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCategoryCreateNestedManyWithoutUpdatedByInputSchema;
