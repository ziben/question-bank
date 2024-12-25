import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleCreateWithoutCreatedByInputSchema } from './RoleCreateWithoutCreatedByInputSchema';
import { RoleUncheckedCreateWithoutCreatedByInputSchema } from './RoleUncheckedCreateWithoutCreatedByInputSchema';

export const RoleCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutCreatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default RoleCreateOrConnectWithoutCreatedByInputSchema;
