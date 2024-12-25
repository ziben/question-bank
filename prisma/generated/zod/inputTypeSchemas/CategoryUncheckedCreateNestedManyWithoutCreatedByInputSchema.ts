import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutCreatedByInputSchema } from './CategoryCreateWithoutCreatedByInputSchema';
import { CategoryUncheckedCreateWithoutCreatedByInputSchema } from './CategoryUncheckedCreateWithoutCreatedByInputSchema';
import { CategoryCreateOrConnectWithoutCreatedByInputSchema } from './CategoryCreateOrConnectWithoutCreatedByInputSchema';
import { CategoryCreateManyCreatedByInputEnvelopeSchema } from './CategoryCreateManyCreatedByInputEnvelopeSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCreatedByInputSchema),z.lazy(() => CategoryCreateWithoutCreatedByInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema;
