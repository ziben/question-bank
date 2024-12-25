import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleScalarWhereInputSchema } from './RoleScalarWhereInputSchema';
import { RoleUpdateManyMutationInputSchema } from './RoleUpdateManyMutationInputSchema';
import { RoleUncheckedUpdateManyWithoutUpdatedByInputSchema } from './RoleUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const RoleUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default RoleUpdateManyWithWhereWithoutUpdatedByInputSchema;
