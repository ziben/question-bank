import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUpdatedByInputSchema } from './RoleCreateWithoutUpdatedByInputSchema';
import { RoleUncheckedCreateWithoutUpdatedByInputSchema } from './RoleUncheckedCreateWithoutUpdatedByInputSchema';
import { RoleCreateOrConnectWithoutUpdatedByInputSchema } from './RoleCreateOrConnectWithoutUpdatedByInputSchema';
import { RoleUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './RoleUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { RoleCreateManyUpdatedByInputEnvelopeSchema } from './RoleCreateManyUpdatedByInputEnvelopeSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './RoleUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { RoleUpdateManyWithWhereWithoutUpdatedByInputSchema } from './RoleUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { RoleScalarWhereInputSchema } from './RoleScalarWhereInputSchema';

export const RoleUncheckedUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUpdatedByInputSchema),z.lazy(() => RoleCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleUncheckedUpdateManyWithoutUpdatedByNestedInputSchema;
