import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateWithoutUpdatedByInputSchema } from './SourceCreateWithoutUpdatedByInputSchema';
import { SourceUncheckedCreateWithoutUpdatedByInputSchema } from './SourceUncheckedCreateWithoutUpdatedByInputSchema';
import { SourceCreateOrConnectWithoutUpdatedByInputSchema } from './SourceCreateOrConnectWithoutUpdatedByInputSchema';
import { SourceUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './SourceUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { SourceCreateManyUpdatedByInputEnvelopeSchema } from './SourceCreateManyUpdatedByInputEnvelopeSchema';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';
import { SourceUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './SourceUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { SourceUpdateManyWithWhereWithoutUpdatedByInputSchema } from './SourceUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { SourceScalarWhereInputSchema } from './SourceScalarWhereInputSchema';

export const SourceUncheckedUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.SourceUncheckedUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => SourceCreateWithoutUpdatedByInputSchema),z.lazy(() => SourceCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => SourceUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SourceCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => SourceCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SourceUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => SourceUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SourceCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SourceUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => SourceUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SourceUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => SourceUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SourceScalarWhereInputSchema),z.lazy(() => SourceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SourceUncheckedUpdateManyWithoutUpdatedByNestedInputSchema;
