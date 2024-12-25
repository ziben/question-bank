import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutUpdatedByInputSchema } from './CategoryCreateWithoutUpdatedByInputSchema';
import { CategoryUncheckedCreateWithoutUpdatedByInputSchema } from './CategoryUncheckedCreateWithoutUpdatedByInputSchema';
import { CategoryCreateOrConnectWithoutUpdatedByInputSchema } from './CategoryCreateOrConnectWithoutUpdatedByInputSchema';
import { CategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './CategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { CategoryCreateManyUpdatedByInputEnvelopeSchema } from './CategoryCreateManyUpdatedByInputEnvelopeSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './CategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { CategoryUpdateManyWithWhereWithoutUpdatedByInputSchema } from './CategoryUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { CategoryScalarWhereInputSchema } from './CategoryScalarWhereInputSchema';

export const CategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => CategoryCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema;
