import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutUpdatedByInputSchema } from './CategoryCreateWithoutUpdatedByInputSchema';
import { CategoryUncheckedCreateWithoutUpdatedByInputSchema } from './CategoryUncheckedCreateWithoutUpdatedByInputSchema';
import { CategoryCreateOrConnectWithoutUpdatedByInputSchema } from './CategoryCreateOrConnectWithoutUpdatedByInputSchema';
import { CategoryCreateManyUpdatedByInputEnvelopeSchema } from './CategoryCreateManyUpdatedByInputEnvelopeSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => CategoryCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema;
