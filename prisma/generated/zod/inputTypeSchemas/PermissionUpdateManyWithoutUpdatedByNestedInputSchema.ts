import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateWithoutUpdatedByInputSchema } from './PermissionCreateWithoutUpdatedByInputSchema';
import { PermissionUncheckedCreateWithoutUpdatedByInputSchema } from './PermissionUncheckedCreateWithoutUpdatedByInputSchema';
import { PermissionCreateOrConnectWithoutUpdatedByInputSchema } from './PermissionCreateOrConnectWithoutUpdatedByInputSchema';
import { PermissionUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './PermissionUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { PermissionCreateManyUpdatedByInputEnvelopeSchema } from './PermissionCreateManyUpdatedByInputEnvelopeSchema';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './PermissionUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { PermissionUpdateManyWithWhereWithoutUpdatedByInputSchema } from './PermissionUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { PermissionScalarWhereInputSchema } from './PermissionScalarWhereInputSchema';

export const PermissionUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutUpdatedByInputSchema),z.lazy(() => PermissionCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => PermissionUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => PermissionUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => PermissionUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema),z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PermissionUpdateManyWithoutUpdatedByNestedInputSchema;
