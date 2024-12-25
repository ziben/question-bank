import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleCreateWithoutUpdatedByInputSchema } from './RoleCreateWithoutUpdatedByInputSchema';
import { RoleUncheckedCreateWithoutUpdatedByInputSchema } from './RoleUncheckedCreateWithoutUpdatedByInputSchema';

export const RoleCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUpdatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default RoleCreateOrConnectWithoutUpdatedByInputSchema;
