import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutUpdatedByInputSchema } from './TagCreateWithoutUpdatedByInputSchema';
import { TagUncheckedCreateWithoutUpdatedByInputSchema } from './TagUncheckedCreateWithoutUpdatedByInputSchema';
import { TagCreateOrConnectWithoutUpdatedByInputSchema } from './TagCreateOrConnectWithoutUpdatedByInputSchema';
import { TagUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './TagUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { TagCreateManyUpdatedByInputEnvelopeSchema } from './TagCreateManyUpdatedByInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './TagUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { TagUpdateManyWithWhereWithoutUpdatedByInputSchema } from './TagUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => TagCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutUpdatedByNestedInputSchema;
