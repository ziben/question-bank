import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateNestedManyWithoutUserInputSchema } from './UserRoleCreateNestedManyWithoutUserInputSchema';
import { RoleCreateNestedManyWithoutCreatedByInputSchema } from './RoleCreateNestedManyWithoutCreatedByInputSchema';
import { RoleCreateNestedManyWithoutUpdatedByInputSchema } from './RoleCreateNestedManyWithoutUpdatedByInputSchema';
import { PermissionCreateNestedManyWithoutCreatedByInputSchema } from './PermissionCreateNestedManyWithoutCreatedByInputSchema';
import { PermissionCreateNestedManyWithoutUpdatedByInputSchema } from './PermissionCreateNestedManyWithoutUpdatedByInputSchema';
import { CategoryCreateNestedManyWithoutCreatedByInputSchema } from './CategoryCreateNestedManyWithoutCreatedByInputSchema';
import { CategoryCreateNestedManyWithoutUpdatedByInputSchema } from './CategoryCreateNestedManyWithoutUpdatedByInputSchema';
import { SubjectCreateNestedManyWithoutCreatedByInputSchema } from './SubjectCreateNestedManyWithoutCreatedByInputSchema';
import { SubjectCreateNestedManyWithoutUpdatedByInputSchema } from './SubjectCreateNestedManyWithoutUpdatedByInputSchema';
import { GradeCreateNestedManyWithoutCreatedByInputSchema } from './GradeCreateNestedManyWithoutCreatedByInputSchema';
import { GradeCreateNestedManyWithoutUpdatedByInputSchema } from './GradeCreateNestedManyWithoutUpdatedByInputSchema';
import { SourceCreateNestedManyWithoutCreatedByInputSchema } from './SourceCreateNestedManyWithoutCreatedByInputSchema';
import { SourceCreateNestedManyWithoutUpdatedByInputSchema } from './SourceCreateNestedManyWithoutUpdatedByInputSchema';
import { QuestionCreateNestedManyWithoutCreatedByInputSchema } from './QuestionCreateNestedManyWithoutCreatedByInputSchema';
import { QuestionCreateNestedManyWithoutUpdatedByInputSchema } from './QuestionCreateNestedManyWithoutUpdatedByInputSchema';
import { TagCreateNestedManyWithoutCreatedByInputSchema } from './TagCreateNestedManyWithoutCreatedByInputSchema';
import { TagCreateNestedManyWithoutUpdatedByInputSchema } from './TagCreateNestedManyWithoutUpdatedByInputSchema';
import { TagCategoryCreateNestedManyWithoutCreatedByInputSchema } from './TagCategoryCreateNestedManyWithoutCreatedByInputSchema';
import { TagCategoryCreateNestedManyWithoutUpdatedByInputSchema } from './TagCategoryCreateNestedManyWithoutUpdatedByInputSchema';
import { QuestionTagCreateNestedManyWithoutCreatedByInputSchema } from './QuestionTagCreateNestedManyWithoutCreatedByInputSchema';
import { QuestionTagCreateNestedManyWithoutUpdatedByInputSchema } from './QuestionTagCreateNestedManyWithoutUpdatedByInputSchema';

export const UserCreateWithoutSystemLogsInputSchema: z.ZodType<Prisma.UserCreateWithoutSystemLogsInput> = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable(),
  updaterId: z.number().int().optional().nullable(),
  roles: z.lazy(() => UserRoleCreateNestedManyWithoutUserInputSchema).optional(),
  createdRoles: z.lazy(() => RoleCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedRoles: z.lazy(() => RoleCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdPermissions: z.lazy(() => PermissionCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedPermissions: z.lazy(() => PermissionCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdCategories: z.lazy(() => CategoryCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedCategories: z.lazy(() => CategoryCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdSubjects: z.lazy(() => SubjectCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedSubjects: z.lazy(() => SubjectCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdGrades: z.lazy(() => GradeCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedGrades: z.lazy(() => GradeCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdSources: z.lazy(() => SourceCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedSources: z.lazy(() => SourceCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdQuestions: z.lazy(() => QuestionCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedQuestions: z.lazy(() => QuestionCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdTags: z.lazy(() => TagCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedTags: z.lazy(() => TagCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdTagCategories: z.lazy(() => TagCategoryCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedTagCategories: z.lazy(() => TagCategoryCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdQuestionTags: z.lazy(() => QuestionTagCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedQuestionTags: z.lazy(() => QuestionTagCreateNestedManyWithoutUpdatedByInputSchema).optional()
}).strict();

export default UserCreateWithoutSystemLogsInputSchema;
