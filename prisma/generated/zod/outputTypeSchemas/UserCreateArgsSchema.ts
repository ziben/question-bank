import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserCreateInputSchema } from '../inputTypeSchemas/UserCreateInputSchema'
import { UserUncheckedCreateInputSchema } from '../inputTypeSchemas/UserUncheckedCreateInputSchema'
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { RoleFindManyArgsSchema } from "../outputTypeSchemas/RoleFindManyArgsSchema"
import { PermissionFindManyArgsSchema } from "../outputTypeSchemas/PermissionFindManyArgsSchema"
import { CategoryFindManyArgsSchema } from "../outputTypeSchemas/CategoryFindManyArgsSchema"
import { SubjectFindManyArgsSchema } from "../outputTypeSchemas/SubjectFindManyArgsSchema"
import { GradeFindManyArgsSchema } from "../outputTypeSchemas/GradeFindManyArgsSchema"
import { SourceFindManyArgsSchema } from "../outputTypeSchemas/SourceFindManyArgsSchema"
import { QuestionFindManyArgsSchema } from "../outputTypeSchemas/QuestionFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { SystemLogFindManyArgsSchema } from "../outputTypeSchemas/SystemLogFindManyArgsSchema"
import { TagCategoryFindManyArgsSchema } from "../outputTypeSchemas/TagCategoryFindManyArgsSchema"
import { QuestionTagFindManyArgsSchema } from "../outputTypeSchemas/QuestionTagFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.boolean().optional(),
  updaterId: z.boolean().optional(),
  roles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  createdRoles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  updatedRoles: z.union([z.boolean(),z.lazy(() => RoleFindManyArgsSchema)]).optional(),
  createdPermissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  updatedPermissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  createdCategories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  updatedCategories: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  createdSubjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  updatedSubjects: z.union([z.boolean(),z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  createdGrades: z.union([z.boolean(),z.lazy(() => GradeFindManyArgsSchema)]).optional(),
  updatedGrades: z.union([z.boolean(),z.lazy(() => GradeFindManyArgsSchema)]).optional(),
  createdSources: z.union([z.boolean(),z.lazy(() => SourceFindManyArgsSchema)]).optional(),
  updatedSources: z.union([z.boolean(),z.lazy(() => SourceFindManyArgsSchema)]).optional(),
  createdQuestions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  updatedQuestions: z.union([z.boolean(),z.lazy(() => QuestionFindManyArgsSchema)]).optional(),
  createdTags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  updatedTags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  systemLogs: z.union([z.boolean(),z.lazy(() => SystemLogFindManyArgsSchema)]).optional(),
  createdTagCategories: z.union([z.boolean(),z.lazy(() => TagCategoryFindManyArgsSchema)]).optional(),
  updatedTagCategories: z.union([z.boolean(),z.lazy(() => TagCategoryFindManyArgsSchema)]).optional(),
  createdQuestionTags: z.union([z.boolean(),z.lazy(() => QuestionTagFindManyArgsSchema)]).optional(),
  updatedQuestionTags: z.union([z.boolean(),z.lazy(() => QuestionTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export default UserCreateArgsSchema;
