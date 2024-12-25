import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutCreatedByInputSchema } from './RoleCreateWithoutCreatedByInputSchema';
import { RoleUncheckedCreateWithoutCreatedByInputSchema } from './RoleUncheckedCreateWithoutCreatedByInputSchema';
import { RoleCreateOrConnectWithoutCreatedByInputSchema } from './RoleCreateOrConnectWithoutCreatedByInputSchema';
import { RoleCreateManyCreatedByInputEnvelopeSchema } from './RoleCreateManyCreatedByInputEnvelopeSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutCreatedByInputSchema),z.lazy(() => RoleCreateWithoutCreatedByInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => RoleCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleUncheckedCreateNestedManyWithoutCreatedByInputSchema;
