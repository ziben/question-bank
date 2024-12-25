import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutCreatedByInputSchema } from './TagCreateWithoutCreatedByInputSchema';
import { TagUncheckedCreateWithoutCreatedByInputSchema } from './TagUncheckedCreateWithoutCreatedByInputSchema';
import { TagCreateOrConnectWithoutCreatedByInputSchema } from './TagCreateOrConnectWithoutCreatedByInputSchema';
import { TagUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './TagUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { TagCreateManyCreatedByInputEnvelopeSchema } from './TagCreateManyCreatedByInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './TagUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { TagUpdateManyWithWhereWithoutCreatedByInputSchema } from './TagUpdateManyWithWhereWithoutCreatedByInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutCreatedByInputSchema),z.lazy(() => TagCreateWithoutCreatedByInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => TagCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutCreatedByNestedInputSchema;
