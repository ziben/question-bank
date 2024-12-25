import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithoutUpdatedByInputSchema } from './RoleUpdateWithoutUpdatedByInputSchema';
import { RoleUncheckedUpdateWithoutUpdatedByInputSchema } from './RoleUncheckedUpdateWithoutUpdatedByInputSchema';

export const RoleUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUpdatedByInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default RoleUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
