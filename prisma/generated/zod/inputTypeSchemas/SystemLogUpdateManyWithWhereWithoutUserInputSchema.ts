import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogScalarWhereInputSchema } from './SystemLogScalarWhereInputSchema';
import { SystemLogUpdateManyMutationInputSchema } from './SystemLogUpdateManyMutationInputSchema';
import { SystemLogUncheckedUpdateManyWithoutUserInputSchema } from './SystemLogUncheckedUpdateManyWithoutUserInputSchema';

export const SystemLogUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SystemLogUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SystemLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SystemLogUpdateManyMutationInputSchema),z.lazy(() => SystemLogUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default SystemLogUpdateManyWithWhereWithoutUserInputSchema;
