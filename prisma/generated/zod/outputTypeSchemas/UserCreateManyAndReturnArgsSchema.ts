import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateManyInputSchema } from '../inputTypeSchemas/UserCreateManyInputSchema'

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export default UserCreateManyAndReturnArgsSchema;
