import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateWithoutCreatedByInputSchema } from './TagCategoryCreateWithoutCreatedByInputSchema';
import { TagCategoryUncheckedCreateWithoutCreatedByInputSchema } from './TagCategoryUncheckedCreateWithoutCreatedByInputSchema';
import { TagCategoryCreateOrConnectWithoutCreatedByInputSchema } from './TagCategoryCreateOrConnectWithoutCreatedByInputSchema';
import { TagCategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './TagCategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { TagCategoryCreateManyCreatedByInputEnvelopeSchema } from './TagCategoryCreateManyCreatedByInputEnvelopeSchema';
import { TagCategoryWhereUniqueInputSchema } from './TagCategoryWhereUniqueInputSchema';
import { TagCategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './TagCategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { TagCategoryUpdateManyWithWhereWithoutCreatedByInputSchema } from './TagCategoryUpdateManyWithWhereWithoutCreatedByInputSchema';
import { TagCategoryScalarWhereInputSchema } from './TagCategoryScalarWhereInputSchema';

export const TagCategoryUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.TagCategoryUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCategoryCreateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryCreateWithoutCreatedByInputSchema).array(),z.lazy(() => TagCategoryUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCategoryCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => TagCategoryCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagCategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCategoryCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagCategoryWhereUniqueInputSchema),z.lazy(() => TagCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagCategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagCategoryUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => TagCategoryUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagCategoryScalarWhereInputSchema),z.lazy(() => TagCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagCategoryUpdateManyWithoutCreatedByNestedInputSchema;
