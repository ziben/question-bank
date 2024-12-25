import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithoutCreatedByInputSchema } from './RoleUpdateWithoutCreatedByInputSchema';
import { RoleUncheckedUpdateWithoutCreatedByInputSchema } from './RoleUncheckedUpdateWithoutCreatedByInputSchema';

export const RoleUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutCreatedByInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default RoleUpdateWithWhereUniqueWithoutCreatedByInputSchema;
