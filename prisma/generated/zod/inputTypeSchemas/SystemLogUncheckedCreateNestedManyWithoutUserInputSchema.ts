import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogCreateWithoutUserInputSchema } from './SystemLogCreateWithoutUserInputSchema';
import { SystemLogUncheckedCreateWithoutUserInputSchema } from './SystemLogUncheckedCreateWithoutUserInputSchema';
import { SystemLogCreateOrConnectWithoutUserInputSchema } from './SystemLogCreateOrConnectWithoutUserInputSchema';
import { SystemLogCreateManyUserInputEnvelopeSchema } from './SystemLogCreateManyUserInputEnvelopeSchema';
import { SystemLogWhereUniqueInputSchema } from './SystemLogWhereUniqueInputSchema';

export const SystemLogUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SystemLogUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SystemLogCreateWithoutUserInputSchema),z.lazy(() => SystemLogCreateWithoutUserInputSchema).array(),z.lazy(() => SystemLogUncheckedCreateWithoutUserInputSchema),z.lazy(() => SystemLogUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SystemLogCreateOrConnectWithoutUserInputSchema),z.lazy(() => SystemLogCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SystemLogCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SystemLogWhereUniqueInputSchema),z.lazy(() => SystemLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SystemLogUncheckedCreateNestedManyWithoutUserInputSchema;
