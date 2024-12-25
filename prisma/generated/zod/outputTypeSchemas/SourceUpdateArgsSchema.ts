import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceIncludeSchema } from '../inputTypeSchemas/SourceIncludeSchema'
import { SourceUpdateInputSchema } from '../inputTypeSchemas/SourceUpdateInputSchema'
import { SourceUncheckedUpdateInputSchema } from '../inputTypeSchemas/SourceUncheckedUpdateInputSchema'
import { SourceWhereUniqueInputSchema } from '../inputTypeSchemas/SourceWhereUniqueInputSchema'
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SourceCountOutputTypeArgsSchema } from "../outputTypeSchemas/SourceCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SourceSelectSchema: z.ZodType<Prisma.SourceSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  questions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  updatedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SourceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SourceUpdateArgsSchema: z.ZodType<Prisma.SourceUpdateArgs> = z.object({
  select: SourceSelectSchema.optional(),
  include: SourceIncludeSchema.optional(),
  data: z.union([ SourceUpdateInputSchema,SourceUncheckedUpdateInputSchema ]),
  where: SourceWhereUniqueInputSchema,
}).strict() ;

export default SourceUpdateArgsSchema;
