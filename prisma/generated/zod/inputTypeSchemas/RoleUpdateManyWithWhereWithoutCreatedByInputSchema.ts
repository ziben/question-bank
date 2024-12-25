import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleScalarWhereInputSchema } from './RoleScalarWhereInputSchema';
import { RoleUpdateManyMutationInputSchema } from './RoleUpdateManyMutationInputSchema';
import { RoleUncheckedUpdateManyWithoutCreatedByInputSchema } from './RoleUncheckedUpdateManyWithoutCreatedByInputSchema';

export const RoleUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default RoleUpdateManyWithWhereWithoutCreatedByInputSchema;
