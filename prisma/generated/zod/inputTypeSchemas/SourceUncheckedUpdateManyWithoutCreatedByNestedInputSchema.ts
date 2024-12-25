import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateWithoutCreatedByInputSchema } from './SourceCreateWithoutCreatedByInputSchema';
import { SourceUncheckedCreateWithoutCreatedByInputSchema } from './SourceUncheckedCreateWithoutCreatedByInputSchema';
import { SourceCreateOrConnectWithoutCreatedByInputSchema } from './SourceCreateOrConnectWithoutCreatedByInputSchema';
import { SourceUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './SourceUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { SourceCreateManyCreatedByInputEnvelopeSchema } from './SourceCreateManyCreatedByInputEnvelopeSchema';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './SourceUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { SourceUpdateManyWithWhereWithoutCreatedByInputSchema } from './SourceUpdateManyWithWhereWithoutCreatedByInputSchema';
import { SourceScalarWhereInputSchema } from './SourceScalarWhereInputSchema';

export const SourceUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.SourceUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => SourceCreateWithoutCreatedByInputSchema),z.lazy(() => SourceCreateWithoutCreatedByInputSchema).array(),z.lazy(() => SourceUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SourceCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => SourceCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SourceUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => SourceUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SourceCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SourceUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => SourceUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SourceUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => SourceUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SourceScalarWhereInputSchema),z.lazy(() => SourceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SourceUncheckedUpdateManyWithoutCreatedByNestedInputSchema;
