import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogWhereUniqueInputSchema } from './SystemLogWhereUniqueInputSchema';
import { SystemLogCreateWithoutUserInputSchema } from './SystemLogCreateWithoutUserInputSchema';
import { SystemLogUncheckedCreateWithoutUserInputSchema } from './SystemLogUncheckedCreateWithoutUserInputSchema';

export const SystemLogCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SystemLogCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SystemLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SystemLogCreateWithoutUserInputSchema),z.lazy(() => SystemLogUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default SystemLogCreateOrConnectWithoutUserInputSchema;
