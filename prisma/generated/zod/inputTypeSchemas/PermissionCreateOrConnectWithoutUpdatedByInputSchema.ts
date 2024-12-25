import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionCreateWithoutUpdatedByInputSchema } from './PermissionCreateWithoutUpdatedByInputSchema';
import { PermissionUncheckedCreateWithoutUpdatedByInputSchema } from './PermissionUncheckedCreateWithoutUpdatedByInputSchema';

export const PermissionCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PermissionCreateWithoutUpdatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default PermissionCreateOrConnectWithoutUpdatedByInputSchema;
