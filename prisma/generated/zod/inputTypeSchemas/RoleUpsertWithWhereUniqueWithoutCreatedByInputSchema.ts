import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithoutCreatedByInputSchema } from './RoleUpdateWithoutCreatedByInputSchema';
import { RoleUncheckedUpdateWithoutCreatedByInputSchema } from './RoleUncheckedUpdateWithoutCreatedByInputSchema';
import { RoleCreateWithoutCreatedByInputSchema } from './RoleCreateWithoutCreatedByInputSchema';
import { RoleUncheckedCreateWithoutCreatedByInputSchema } from './RoleUncheckedCreateWithoutCreatedByInputSchema';

export const RoleUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutCreatedByInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutCreatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default RoleUpsertWithWhereUniqueWithoutCreatedByInputSchema;
