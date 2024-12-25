import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateWithoutUpdatedByInputSchema } from './PermissionUpdateWithoutUpdatedByInputSchema';
import { PermissionUncheckedUpdateWithoutUpdatedByInputSchema } from './PermissionUncheckedUpdateWithoutUpdatedByInputSchema';

export const PermissionUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutUpdatedByInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default PermissionUpdateWithWhereUniqueWithoutUpdatedByInputSchema;
