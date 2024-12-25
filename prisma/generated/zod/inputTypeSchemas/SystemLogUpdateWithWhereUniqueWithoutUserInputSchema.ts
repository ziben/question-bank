import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogWhereUniqueInputSchema } from './SystemLogWhereUniqueInputSchema';
import { SystemLogUpdateWithoutUserInputSchema } from './SystemLogUpdateWithoutUserInputSchema';
import { SystemLogUncheckedUpdateWithoutUserInputSchema } from './SystemLogUncheckedUpdateWithoutUserInputSchema';

export const SystemLogUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SystemLogUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SystemLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SystemLogUpdateWithoutUserInputSchema),z.lazy(() => SystemLogUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default SystemLogUpdateWithWhereUniqueWithoutUserInputSchema;
