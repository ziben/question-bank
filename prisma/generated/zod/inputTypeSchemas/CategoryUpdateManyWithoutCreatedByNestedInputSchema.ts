import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutCreatedByInputSchema } from './CategoryCreateWithoutCreatedByInputSchema';
import { CategoryUncheckedCreateWithoutCreatedByInputSchema } from './CategoryUncheckedCreateWithoutCreatedByInputSchema';
import { CategoryCreateOrConnectWithoutCreatedByInputSchema } from './CategoryCreateOrConnectWithoutCreatedByInputSchema';
import { CategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './CategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { CategoryCreateManyCreatedByInputEnvelopeSchema } from './CategoryCreateManyCreatedByInputEnvelopeSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './CategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { CategoryUpdateManyWithWhereWithoutCreatedByInputSchema } from './CategoryUpdateManyWithWhereWithoutCreatedByInputSchema';
import { CategoryScalarWhereInputSchema } from './CategoryScalarWhereInputSchema';

export const CategoryUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCreatedByInputSchema),z.lazy(() => CategoryCreateWithoutCreatedByInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CategoryUpdateManyWithoutCreatedByNestedInputSchema;
