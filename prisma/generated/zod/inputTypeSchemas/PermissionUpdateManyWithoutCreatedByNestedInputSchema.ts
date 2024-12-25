import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionCreateWithoutCreatedByInputSchema } from './PermissionCreateWithoutCreatedByInputSchema';
import { PermissionUncheckedCreateWithoutCreatedByInputSchema } from './PermissionUncheckedCreateWithoutCreatedByInputSchema';
import { PermissionCreateOrConnectWithoutCreatedByInputSchema } from './PermissionCreateOrConnectWithoutCreatedByInputSchema';
import { PermissionUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './PermissionUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { PermissionCreateManyCreatedByInputEnvelopeSchema } from './PermissionCreateManyCreatedByInputEnvelopeSchema';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './PermissionUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { PermissionUpdateManyWithWhereWithoutCreatedByInputSchema } from './PermissionUpdateManyWithWhereWithoutCreatedByInputSchema';
import { PermissionScalarWhereInputSchema } from './PermissionScalarWhereInputSchema';

export const PermissionUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => PermissionCreateWithoutCreatedByInputSchema),z.lazy(() => PermissionCreateWithoutCreatedByInputSchema).array(),z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => PermissionCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PermissionUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema),z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => PermissionUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => PermissionUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema),z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PermissionUpdateManyWithoutCreatedByNestedInputSchema;
