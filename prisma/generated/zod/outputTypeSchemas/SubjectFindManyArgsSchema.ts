import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubjectIncludeSchema } from '../inputTypeSchemas/SubjectIncludeSchema'
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema'
import { SubjectOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubjectOrderByWithRelationInputSchema'
import { SubjectWhereUniqueInputSchema } from '../inputTypeSchemas/SubjectWhereUniqueInputSchema'
import { SubjectScalarFieldEnumSchema } from '../inputTypeSchemas/SubjectScalarFieldEnumSchema'
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SubjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/SubjectCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubjectSelectSchema: z.ZodType<Prisma.SubjectSelect> = z.object({
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
  _count: z.union([z.boolean(),z.lazy(() => SubjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SubjectFindManyArgsSchema: z.ZodType<Prisma.SubjectFindManyArgs> = z.object({
  select: SubjectSelectSchema.optional(),
  include: SubjectIncludeSchema.optional(),
  where: SubjectWhereInputSchema.optional(),
  orderBy: z.union([ SubjectOrderByWithRelationInputSchema.array(),SubjectOrderByWithRelationInputSchema ]).optional(),
  cursor: SubjectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubjectScalarFieldEnumSchema,SubjectScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SubjectFindManyArgsSchema;
