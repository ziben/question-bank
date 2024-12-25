import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateWithoutCreatedByInputSchema } from './PermissionCreateWithoutCreatedByInputSchema';
import { PermissionUncheckedCreateWithoutCreatedByInputSchema } from './PermissionUncheckedCreateWithoutCreatedByInputSchema';
import { PermissionCreateOrConnectWithoutCreatedByInputSchema } from './PermissionCreateOrConnectWithoutCreatedByInputSchema';
import { PermissionCreateManyCreatedByInputEnvelopeSchema } from './PermissionCreateManyCreatedByInputEnvelopeSchema';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';

export const PermissionCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.PermissionCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutCreatedByInputSchema),z.lazy(() => PermissionCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PermissionCreateNestedManyWithoutCreatedByInputSchema;
