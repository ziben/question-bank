import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUpdatedByInputSchema } from './RoleCreateWithoutUpdatedByInputSchema';
import { RoleUncheckedCreateWithoutUpdatedByInputSchema } from './RoleUncheckedCreateWithoutUpdatedByInputSchema';
import { RoleCreateOrConnectWithoutUpdatedByInputSchema } from './RoleCreateOrConnectWithoutUpdatedByInputSchema';
import { RoleCreateManyUpdatedByInputEnvelopeSchema } from './RoleCreateManyUpdatedByInputEnvelopeSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUpdatedByInputSchema),z.lazy(() => RoleCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleCreateNestedManyWithoutUpdatedByInputSchema;
