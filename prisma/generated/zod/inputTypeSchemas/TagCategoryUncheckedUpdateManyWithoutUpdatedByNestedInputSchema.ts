import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateWithoutUpdatedByInputSchema } from './TagCategoryCreateWithoutUpdatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutUpdatedByInputSchema } from './TagCategoryUncheckedCreateWithoutUpdatedByInputSchema';
import { TagCategoryCreateOrConnectWithoutUpdatedByInputSchema } from './TagCategoryCreateOrConnectWithoutUpdatedByInputSchema';
import { TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { TagCategoryCreateManyUpdatedByInputEnvelopeSchema } from './TagCategoryCreateManyUpdatedByInputEnvelopeSchema';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { TagCategoryUpdateManyWithWhereWithoutUpdatedByInputSchema } from './TagCategoryUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { TagCategoryScalarWhereInputSchema } from './TagCategoryScalarWhereInputSchema';

export const TagCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.TagCategoryUncheckedUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => TagCategoryUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCategoryCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCategoryCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagCategoryUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => TagCategoryUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagCategoryScalarWhereInputSchema),z.lazy(() => TagCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema;
