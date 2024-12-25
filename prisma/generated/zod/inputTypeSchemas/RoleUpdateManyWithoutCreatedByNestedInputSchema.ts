import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutCreatedByInputSchema } from './RoleCreateWithoutCreatedByInputSchema';
import { RoleUncheckedCreateWithoutCreatedByInputSchema } from './RoleUncheckedCreateWithoutCreatedByInputSchema';
import { RoleCreateOrConnectWithoutCreatedByInputSchema } from './RoleCreateOrConnectWithoutCreatedByInputSchema';
import { RoleUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './RoleUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { RoleCreateManyCreatedByInputEnvelopeSchema } from './RoleCreateManyCreatedByInputEnvelopeSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './RoleUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { RoleUpdateManyWithWhereWithoutCreatedByInputSchema } from './RoleUpdateManyWithWhereWithoutCreatedByInputSchema';
import { RoleScalarWhereInputSchema } from './RoleScalarWhereInputSchema';

export const RoleUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.RoleUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutCreatedByInputSchema),z.lazy(() => RoleCreateWithoutCreatedByInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => RoleCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleUpdateManyWithoutCreatedByNestedInputSchema;
