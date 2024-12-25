import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema } from './UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema';
import { RoleUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './RoleUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { RoleUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './RoleUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { PermissionUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './PermissionUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { PermissionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './PermissionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { CategoryUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './CategoryUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { CategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './CategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { GradeUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './GradeUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { SourceUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './SourceUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { SourceUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './SourceUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { QuestionUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './QuestionUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { QuestionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './QuestionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { TagUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './TagUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { TagUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './TagUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { SystemLogUncheckedUpdateManyWithoutUserNestedInputSchema } from './SystemLogUncheckedUpdateManyWithoutUserNestedInputSchema';
import { TagCategoryUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './TagCategoryUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { TagCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './TagCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';
import { QuestionTagUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './QuestionTagUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { QuestionTagUncheckedUpdateManyWithoutUpdatedByNestedInputSchema } from './QuestionTagUncheckedUpdateManyWithoutUpdatedByNestedInputSchema';

export const UserUncheckedUpdateWithoutCreatedGradesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCreatedGradesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  creatorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updaterId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  roles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  createdRoles: z.lazy(() => RoleUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedRoles: z.lazy(() => RoleUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdPermissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedPermissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdCategories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedCategories: z.lazy(() => CategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdSubjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedSubjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  updatedGrades: z.lazy(() => GradeUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdSources: z.lazy(() => SourceUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedSources: z.lazy(() => SourceUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdQuestions: z.lazy(() => QuestionUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedQuestions: z.lazy(() => QuestionUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdTags: z.lazy(() => TagUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedTags: z.lazy(() => TagUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  systemLogs: z.lazy(() => SystemLogUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  createdTagCategories: z.lazy(() => TagCategoryUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedTagCategories: z.lazy(() => TagCategoryUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional(),
  createdQuestionTags: z.lazy(() => QuestionTagUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional(),
  updatedQuestionTags: z.lazy(() => QuestionTagUncheckedUpdateManyWithoutUpdatedByNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutCreatedGradesInputSchema;
