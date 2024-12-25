import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionWhereUniqueInputSchema } from './PermissionWhereUniqueInputSchema';
import { PermissionUpdateWithoutCreatedByInputSchema } from './PermissionUpdateWithoutCreatedByInputSchema';
import { PermissionUncheckedUpdateWithoutCreatedByInputSchema } from './PermissionUncheckedUpdateWithoutCreatedByInputSchema';
import { PermissionCreateWithoutCreatedByInputSchema } from './PermissionCreateWithoutCreatedByInputSchema';
import { PermissionUncheckedCreateWithoutCreatedByInputSchema } from './PermissionUncheckedCreateWithoutCreatedByInputSchema';

export const PermissionUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PermissionUpdateWithoutCreatedByInputSchema),z.lazy(() => PermissionUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutCreatedByInputSchema),z.lazy(() => PermissionUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default PermissionUpsertWithWhereUniqueWithoutCreatedByInputSchema;
