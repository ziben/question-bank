import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateWithoutCreatedByInputSchema } from './PermissionUpdateWithoutCreatedByInputSchema';
import { PermissionUncheckedUpdateWithoutCreatedByInputSchema } from './PermissionUncheckedUpdateWithoutCreatedByInputSchema';

export const PermissionUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutCreatedByInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default PermissionUpdateWithWhereUniqueWithoutCreatedByInputSchema;
