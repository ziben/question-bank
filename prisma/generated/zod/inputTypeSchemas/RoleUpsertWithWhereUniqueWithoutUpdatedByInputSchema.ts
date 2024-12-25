import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithoutUpdatedByInputSchema } from './RoleUpdateWithoutUpdatedByInputSchema';
import { RoleUncheckedUpdateWithoutUpdatedByInputSchema } from './RoleUncheckedUpdateWithoutUpdatedByInputSchema';
import { RoleCreateWithoutUpdatedByInputSchema } from './RoleCreateWithoutUpdatedByInputSchema';
import { RoleUncheckedCreateWithoutUpdatedByInputSchema } from './RoleUncheckedCreateWithoutUpdatedByInputSchema';

export const RoleUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutUpdatedByInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUpdatedByInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default RoleUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
