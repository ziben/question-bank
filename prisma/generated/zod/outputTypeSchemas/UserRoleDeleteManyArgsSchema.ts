import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleWhereInputSchema } from '../inputTypeSchemas/UserRoleWhereInputSchema'

export const UserRoleDeleteManyArgsSchema: z.ZodType<Prisma.UserRoleDeleteManyArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(),
}).strict() ;

export default UserRoleDeleteManyArgsSchema;
