import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateManyInputSchema } from '../inputTypeSchemas/CategoryCreateManyInputSchema'

export const CategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
}).strict() ;

export default CategoryCreateManyAndReturnArgsSchema;
