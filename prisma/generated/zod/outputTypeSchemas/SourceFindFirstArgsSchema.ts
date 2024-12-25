import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceIncludeSchema } from '../inputTypeSchemas/SourceIncludeSchema'
import { SourceWhereInputSchema } from '../inputTypeSchemas/SourceWhereInputSchema'
import { SourceOrderByWithRelationInputSchema } from '../inputTypeSchemas/SourceOrderByWithRelationInputSchema'
import { SourceWhereUniqueInputSchema } from '../inputTypeSchemas/SourceWhereUniqueInputSchema'
import { SourceScalarFieldEnumSchema } from '../inputTypeSchemas/SourceScalarFieldEnumSchema'
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

export const SourceFindFirstArgsSchema: z.ZodType<Prisma.SourceFindFirstArgs> = z.object({
  select: SourceSelectSchema.optional(),
  include: SourceIncludeSchema.optional(),
  where: SourceWhereInputSchema.optional(),
  orderBy: z.union([ SourceOrderByWithRelationInputSchema.array(),SourceOrderByWithRelationInputSchema ]).optional(),
  cursor: SourceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SourceScalarFieldEnumSchema,SourceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SourceFindFirstArgsSchema;
