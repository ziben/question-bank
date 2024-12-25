import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { UserRoleUpdateManyWithoutUserNestedInputSchema } from './UserRoleUpdateManyWithoutUserNestedInputSchema';
import { RoleUpdateManyWithoutCreatedByNestedInputSchema } from './RoleUpdateManyWithoutCreatedByNestedInputSchema';
import { RoleUpdateManyWithoutUpdatedByNestedInputSchema } from './RoleUpdateManyWithoutUpdatedByNestedInputSchema';
import { PermissionUpdateManyWithoutCreatedByNestedInputSchema } from './PermissionUpdateManyWithoutCreatedByNestedInputSchema';
import { PermissionUpdateManyWithoutUpdatedByNestedInputSchema } from './PermissionUpdateManyWithoutUpdatedByNestedInputSchema';
import { CategoryUpdateManyWithoutCreatedByNestedInputSchema } from './CategoryUpdateManyWithoutCreatedByNestedInputSchema';
import { CategoryUpdateManyWithoutUpdatedByNestedInputSchema } from './CategoryUpdateManyWithoutUpdatedByNestedInputSchema';
import { SubjectUpdateManyWithoutCreatedByNestedInputSchema } from './SubjectUpdateManyWithoutCreatedByNestedInputSchema';
import { SubjectUpdateManyWithoutUpdatedByNestedInputSchema } from './SubjectUpdateManyWithoutUpdatedByNestedInputSchema';
import { GradeUpdateManyWithoutCreatedByNestedInputSchema } from './GradeUpdateManyWithoutCreatedByNestedInputSchema';
import { GradeUpdateManyWithoutUpdatedByNestedInputSchema } from './GradeUpdateManyWithoutUpdatedByNestedInputSchema';
import { SourceUpdateManyWithoutCreatedByNestedInputSchema } from './SourceUpdateManyWithoutCreatedByNestedInputSchema';
import { SourceUpdateManyWithoutUpdatedByNestedInputSchema } from './SourceUpdateManyWithoutUpdatedByNestedInputSchema';
import { QuestionUpdateManyWithoutCreatedByNestedInputSchema } from './QuestionUpdateManyWithoutCreatedByNestedInputSchema';
import { QuestionUpdateManyWithoutUpdatedByNestedInputSchema } from './QuestionUpdateManyWithoutUpdatedByNestedInputSchema';
import { TagUpdateManyWithoutCreatedByNestedInputSchema } from './TagUpdateManyWithoutCreatedByNestedInputSchema';
import { TagUpdateManyWithoutUpdatedByNestedInputSchema } from './TagUpdateManyWithoutUpdatedByNestedInputSchema';
import { SystemLogUpdateManyWithoutUserNestedInputSchema } from './SystemLogUpdateManyWithoutUserNestedInputSchema';
import { TagCategoryUpdateManyWithoutCreatedByNestedInputSchema } from './TagCategoryUpdateManyWithoutCreatedByNestedInputSchema';
import { TagCategoryUpdateManyWithoutUpdatedByNestedInputSchema } from './TagCategoryUpdateManyWithoutUpdatedByNestedInputSchema';
import { QuestionTagUpdateManyWithoutCreatedByNestedInputSchema } from './QuestionTagUpdateManyWithoutCreatedByNestedInputSchema';

export const UserUpdateWithoutUpdatedQuestionTagsInputSchema: z.ZodType<Prisma.UserUpdateWithoutUpdatedQuestionTagsInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  creatorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updaterId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => UserRoleUpdateManyWithoutUserNestedInputSchema).optional(),
  createdRoles: z.lazy(() => RoleUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedRoles: z.lazy(() => RoleUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdPermissions: z.lazy(() => PermissionUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedPermissions: z.lazy(() => PermissionUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdCategories: z.lazy(() => CategoryUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedCategories: z.lazy(() => CategoryUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdSubjects: z.lazy(() => SubjectUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedSubjects: z.lazy(() => SubjectUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdGrades: z.lazy(() => GradeUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedGrades: z.lazy(() => GradeUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdSources: z.lazy(() => SourceUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedSources: z.lazy(() => SourceUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdQuestions: z.lazy(() => QuestionUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedQuestions: z.lazy(() => QuestionUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdTags: z.lazy(() => TagUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedTags: z.lazy(() => TagUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  systemLogs: z.lazy(() => SystemLogUpdateManyWithoutUserNestedInputSchema).optional(),
  createdTagCategories: z.lazy(() => TagCategoryUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedTagCategories: z.lazy(() => TagCategoryUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdQuestionTags: z.lazy(() => QuestionTagUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutUpdatedQuestionTagsInputSchema;
