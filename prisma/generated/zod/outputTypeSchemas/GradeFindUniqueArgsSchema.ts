import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeIncludeSchema } from '../inputTypeSchemas/GradeIncludeSchema'
import { GradeWhereUniqueInputSchema } from '../inputTypeSchemas/GradeWhereUniqueInputSchema'
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { GradeCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GradeSelectSchema: z.ZodType<Prisma.GradeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GradeFindUniqueArgsSchema: z.ZodType<Prisma.GradeFindUniqueArgs> = z.object({
  select: GradeSelectSchema.optional(),
  include: GradeIncludeSchema.optional(),
  where: GradeWhereUniqueInputSchema,
}).strict() ;

export default GradeFindUniqueArgsSchema;
