import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogWhereUniqueInputSchema } from './SystemLogWhereUniqueInputSchema';
import { SystemLogUpdateWithoutUserInputSchema } from './SystemLogUpdateWithoutUserInputSchema';
import { SystemLogUncheckedUpdateWithoutUserInputSchema } from './SystemLogUncheckedUpdateWithoutUserInputSchema';
import { SystemLogCreateWithoutUserInputSchema } from './SystemLogCreateWithoutUserInputSchema';
import { SystemLogUncheckedCreateWithoutUserInputSchema } from './SystemLogUncheckedCreateWithoutUserInputSchema';

export const SystemLogUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SystemLogUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SystemLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SystemLogUpdateWithoutUserInputSchema),z.lazy(() => SystemLogUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SystemLogCreateWithoutUserInputSchema),z.lazy(() => SystemLogUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default SystemLogUpsertWithWhereUniqueWithoutUserInputSchema;
