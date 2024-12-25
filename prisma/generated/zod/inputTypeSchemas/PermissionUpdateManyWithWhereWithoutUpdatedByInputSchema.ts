import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PermissionScalarWhereInputSchema } from './PermissionScalarWhereInputSchema';
import { PermissionUpdateManyMutationInputSchema } from './PermissionUpdateManyMutationInputSchema';
import { PermissionUncheckedUpdateManyWithoutUpdatedByInputSchema } from './PermissionUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const PermissionUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => PermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateManyMutationInputSchema),z.lazy(() => PermissionUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default PermissionUpdateManyWithWhereWithoutUpdatedByInputSchema;
