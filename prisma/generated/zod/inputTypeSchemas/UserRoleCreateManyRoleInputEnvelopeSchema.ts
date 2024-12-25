import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateManyRoleInputSchema } from './UserRoleCreateManyRoleInputSchema';

export const UserRoleCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyRoleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserRoleCreateManyRoleInputSchema),z.lazy(() => UserRoleCreateManyRoleInputSchema).array() ]),
}).strict();

export default UserRoleCreateManyRoleInputEnvelopeSchema;
