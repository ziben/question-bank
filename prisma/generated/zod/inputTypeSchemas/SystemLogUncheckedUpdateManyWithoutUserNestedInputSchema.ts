import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogCreateWithoutUserInputSchema } from './SystemLogCreateWithoutUserInputSchema';
import { SystemLogUncheckedCreateWithoutUserInputSchema } from './SystemLogUncheckedCreateWithoutUserInputSchema';
import { SystemLogCreateOrConnectWithoutUserInputSchema } from './SystemLogCreateOrConnectWithoutUserInputSchema';
import { SystemLogUpsertWithWhereUniqueWithoutUserInputSchema } from './SystemLogUpsertWithWhereUniqueWithoutUserInputSchema';
import { SystemLogCreateManyUserInputEnvelopeSchema } from './SystemLogCreateManyUserInputEnvelopeSchema';
import { SystemLogWhereUniqueInputSchema } from './SystemLogWhereUniqueInputSchema';
import { SystemLogUpdateWithWhereUniqueWithoutUserInputSchema } from './SystemLogUpdateWithWhereUniqueWithoutUserInputSchema';
import { SystemLogUpdateManyWithWhereWithoutUserInputSchema } from './SystemLogUpdateManyWithWhereWithoutUserInputSchema';
import { SystemLogScalarWhereInputSchema } from './SystemLogScalarWhereInputSchema';

export const SystemLogUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SystemLogUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SystemLogCreateWithoutUserInputSchema),z.lazy(() => SystemLogCreateWithoutUserInputSchema).array(),z.lazy(() => SystemLogUncheckedCreateWithoutUserInputSchema),z.lazy(() => SystemLogUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SystemLogCreateOrConnectWithoutUserInputSchema),z.lazy(() => SystemLogCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SystemLogUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SystemLogUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SystemLogCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SystemLogWhereUniqueInputSchema),z.lazy(() => SystemLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SystemLogWhereUniqueInputSchema),z.lazy(() => SystemLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SystemLogWhereUniqueInputSchema),z.lazy(() => SystemLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SystemLogWhereUniqueInputSchema),z.lazy(() => SystemLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SystemLogUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SystemLogUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SystemLogUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SystemLogUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SystemLogScalarWhereInputSchema),z.lazy(() => SystemLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SystemLogUncheckedUpdateManyWithoutUserNestedInputSchema;
