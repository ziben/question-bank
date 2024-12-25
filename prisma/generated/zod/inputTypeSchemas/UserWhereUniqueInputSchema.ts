import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { UserRoleListRelationFilterSchema } from './UserRoleListRelationFilterSchema';
import { RoleListRelationFilterSchema } from './RoleListRelationFilterSchema';
import { PermissionListRelationFilterSchema } from './PermissionListRelationFilterSchema';
import { CategoryListRelationFilterSchema } from './CategoryListRelationFilterSchema';
import { SubjectListRelationFilterSchema } from './SubjectListRelationFilterSchema';
import { GradeListRelationFilterSchema } from './GradeListRelationFilterSchema';
import { SourceListRelationFilterSchema } from './SourceListRelationFilterSchema';
import { QuestionListRelationFilterSchema } from './QuestionListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { SystemLogListRelationFilterSchema } from './SystemLogListRelationFilterSchema';
import { TagCategoryListRelationFilterSchema } from './TagCategoryListRelationFilterSchema';
import { QuestionTagListRelationFilterSchema } from './QuestionTagListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    username: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.number().int(),
    username: z.string(),
  }),
  z.object({
    id: z.number().int(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    username: z.string(),
    email: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  creatorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  updaterId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  roles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  createdRoles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  updatedRoles: z.lazy(() => RoleListRelationFilterSchema).optional(),
  createdPermissions: z.lazy(() => PermissionListRelationFilterSchema).optional(),
  updatedPermissions: z.lazy(() => PermissionListRelationFilterSchema).optional(),
  createdCategories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  updatedCategories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  createdSubjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  updatedSubjects: z.lazy(() => SubjectListRelationFilterSchema).optional(),
  createdGrades: z.lazy(() => GradeListRelationFilterSchema).optional(),
  updatedGrades: z.lazy(() => GradeListRelationFilterSchema).optional(),
  createdSources: z.lazy(() => SourceListRelationFilterSchema).optional(),
  updatedSources: z.lazy(() => SourceListRelationFilterSchema).optional(),
  createdQuestions: z.lazy(() => QuestionListRelationFilterSchema).optional(),
  updatedQuestions: z.lazy(() => QuestionListRelationFilterSchema).optional(),
  createdTags: z.lazy(() => TagListRelationFilterSchema).optional(),
  updatedTags: z.lazy(() => TagListRelationFilterSchema).optional(),
  systemLogs: z.lazy(() => SystemLogListRelationFilterSchema).optional(),
  createdTagCategories: z.lazy(() => TagCategoryListRelationFilterSchema).optional(),
  updatedTagCategories: z.lazy(() => TagCategoryListRelationFilterSchema).optional(),
  createdQuestionTags: z.lazy(() => QuestionTagListRelationFilterSchema).optional(),
  updatedQuestionTags: z.lazy(() => QuestionTagListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
