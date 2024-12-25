import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateWithoutUpdatedByInputSchema } from './PermissionCreateWithoutUpdatedByInputSchema';
import { PermissionUncheckedCreateWithoutUpdatedByInputSchema } from './PermissionUncheckedCreateWithoutUpdatedByInputSchema';
import { PermissionCreateOrConnectWithoutUpdatedByInputSchema } from './PermissionCreateOrConnectWithoutUpdatedByInputSchema';
import { PermissionCreateManyUpdatedByInputEnvelopeSchema } from './PermissionCreateManyUpdatedByInputEnvelopeSchema';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';

export const PermissionUncheckedCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutUpdatedByInputSchema),z.lazy(() => PermissionCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PermissionUncheckedCreateNestedManyWithoutUpdatedByInputSchema;
