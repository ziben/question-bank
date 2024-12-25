import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionScalarWhereInputSchema } from './PermissionScalarWhereInputSchema';
import { PermissionUpdateManyMutationInputSchema } from './PermissionUpdateManyMutationInputSchema';
import { PermissionUncheckedUpdateManyWithoutCreatedByInputSchema } from './PermissionUncheckedUpdateManyWithoutCreatedByInputSchema';

export const PermissionUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => PermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateManyMutationInputSchema),z.lazy(() => PermissionUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default PermissionUpdateManyWithWhereWithoutCreatedByInputSchema;
