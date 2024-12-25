import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateWithoutUpdatedByInputSchema } from './PermissionUpdateWithoutUpdatedByInputSchema';
import { PermissionUncheckedUpdateWithoutUpdatedByInputSchema } from './PermissionUncheckedUpdateWithoutUpdatedByInputSchema';
import { PermissionCreateWithoutUpdatedByInputSchema } from './PermissionCreateWithoutUpdatedByInputSchema';
import { PermissionUncheckedCreateWithoutUpdatedByInputSchema } from './PermissionUncheckedCreateWithoutUpdatedByInputSchema';

export const PermissionUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PermissionUpdateWithoutUpdatedByInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutUpdatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default PermissionUpsertWithWhereUniqueWithoutUpdatedByInputSchema;
