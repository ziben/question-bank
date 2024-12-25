import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUsersInputSchema } from './RoleCreateWithoutUsersInputSchema';
import { RoleUncheckedCreateWithoutUsersInputSchema } from './RoleUncheckedCreateWithoutUsersInputSchema';
import { RoleCreateOrConnectWithoutUsersInputSchema } from './RoleCreateOrConnectWithoutUsersInputSchema';
import { RoleUpsertWithoutUsersInputSchema } from './RoleUpsertWithoutUsersInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateToOneWithWhereWithoutUsersInputSchema } from './RoleUpdateToOneWithWhereWithoutUsersInputSchema';
import { RoleUpdateWithoutUsersInputSchema } from './RoleUpdateWithoutUsersInputSchema';
import { RoleUncheckedUpdateWithoutUsersInputSchema } from './RoleUncheckedUpdateWithoutUsersInputSchema';

export const RoleUpdateOneRequiredWithoutUsersNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUsersInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutUsersInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutUsersInputSchema),z.lazy(() => RoleUpdateWithoutUsersInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUsersInputSchema) ]).optional(),
}).strict();

export default RoleUpdateOneRequiredWithoutUsersNestedInputSchema;
