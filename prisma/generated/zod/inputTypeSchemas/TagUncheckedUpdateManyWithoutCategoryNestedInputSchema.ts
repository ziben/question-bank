import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutCategoryInputSchema } from './TagCreateWithoutCategoryInputSchema';
import { TagUncheckedCreateWithoutCategoryInputSchema } from './TagUncheckedCreateWithoutCategoryInputSchema';
import { TagCreateOrConnectWithoutCategoryInputSchema } from './TagCreateOrConnectWithoutCategoryInputSchema';
import { TagUpsertWithWhereUniqueWithoutCategoryInputSchema } from './TagUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { TagCreateManyCategoryInputEnvelopeSchema } from './TagCreateManyCategoryInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutCategoryInputSchema } from './TagUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { TagUpdateManyWithWhereWithoutCategoryInputSchema } from './TagUpdateManyWithWhereWithoutCategoryInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutCategoryInputSchema),z.lazy(() => TagCreateWithoutCategoryInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => TagUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => TagCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedUpdateManyWithoutCategoryNestedInputSchema;
