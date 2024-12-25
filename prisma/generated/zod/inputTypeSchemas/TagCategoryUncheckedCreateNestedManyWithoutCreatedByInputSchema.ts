import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateWithoutCreatedByInputSchema } from './TagCategoryCreateWithoutCreatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutCreatedByInputSchema } from './TagCategoryUncheckedCreateWithoutCreatedByInputSchema';
import { TagCategoryCreateOrConnectWithoutCreatedByInputSchema } from './TagCategoryCreateOrConnectWithoutCreatedByInputSchema';
import { TagCategoryCreateManyCreatedByInputEnvelopeSchema } from './TagCategoryCreateManyCreatedByInputEnvelopeSchema';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';

export const TagCategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCategoryUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryCreateWithoutCreatedByInputSchema).array(),z.lazy(() => TagCategoryUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCategoryCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => TagCategoryCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCategoryCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema;
