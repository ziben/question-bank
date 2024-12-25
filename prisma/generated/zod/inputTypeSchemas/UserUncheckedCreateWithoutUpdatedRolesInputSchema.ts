import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutUserInputSchema';
import { RoleUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './RoleUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { PermissionUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './PermissionUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { PermissionUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './PermissionUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { CategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './CategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { CategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './CategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './SubjectUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './SubjectUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { GradeUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './GradeUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { GradeUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './GradeUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { SourceUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './SourceUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { SourceUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './SourceUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { QuestionUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './QuestionUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { QuestionUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './QuestionUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { TagUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TagUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { TagUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './TagUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { SystemLogUncheckedCreateNestedManyWithoutUserInputSchema } from './SystemLogUncheckedCreateNestedManyWithoutUserInputSchema';
import { TagCategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TagCategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { TagCategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './TagCategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema';
import { QuestionTagUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './QuestionTagUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { QuestionTagUncheckedCreateNestedManyWithoutUpdatedByInputSchema } from './QuestionTagUncheckedCreateNestedManyWithoutUpdatedByInputSchema';

export const UserUncheckedCreateWithoutUpdatedRolesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUpdatedRolesInput> = z.object({
  id: z.number().int().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int().optional().nullable(),
  updaterId: z.number().int().optional().nullable(),
  roles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  createdRoles: z.lazy(() => RoleUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  createdPermissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedPermissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdCategories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedCategories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdSubjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedSubjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdGrades: z.lazy(() => GradeUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedGrades: z.lazy(() => GradeUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdSources: z.lazy(() => SourceUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedSources: z.lazy(() => SourceUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdQuestions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedQuestions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdTags: z.lazy(() => TagUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedTags: z.lazy(() => TagUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  systemLogs: z.lazy(() => SystemLogUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  createdTagCategories: z.lazy(() => TagCategoryUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedTagCategories: z.lazy(() => TagCategoryUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional(),
  createdQuestionTags: z.lazy(() => QuestionTagUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional(),
  updatedQuestionTags: z.lazy(() => QuestionTagUncheckedCreateNestedManyWithoutUpdatedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutUpdatedRolesInputSchema;
