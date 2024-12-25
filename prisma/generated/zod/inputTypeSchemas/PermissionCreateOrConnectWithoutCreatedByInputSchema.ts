import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionCreateWithoutCreatedByInputSchema } from './PermissionCreateWithoutCreatedByInputSchema';
import { PermissionUncheckedCreateWithoutCreatedByInputSchema } from './PermissionUncheckedCreateWithoutCreatedByInputSchema';

export const PermissionCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PermissionCreateWithoutCreatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default PermissionCreateOrConnectWithoutCreatedByInputSchema;
