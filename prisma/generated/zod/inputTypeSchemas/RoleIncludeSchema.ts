import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { RoleCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoleCountOutputTypeArgsSchema"

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z.object({
  users: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RoleIncludeSchema;
