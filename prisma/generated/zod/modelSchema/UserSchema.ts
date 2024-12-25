import { z } from 'zod';
import { UserRoleWithRelationsSchema, UserRoleOptionalDefaultsWithRelationsSchema } from './UserRoleSchema'
import type { UserRoleWithRelations, UserRoleOptionalDefaultsWithRelations } from './UserRoleSchema'
import { RoleWithRelationsSchema, RoleOptionalDefaultsWithRelationsSchema } from './RoleSchema'
import type { RoleWithRelations, RoleOptionalDefaultsWithRelations } from './RoleSchema'
import { PermissionWithRelationsSchema, PermissionOptionalDefaultsWithRelationsSchema } from './PermissionSchema'
import type { PermissionWithRelations, PermissionOptionalDefaultsWithRelations } from './PermissionSchema'
import { CategoryWithRelationsSchema, CategoryOptionalDefaultsWithRelationsSchema } from './CategorySchema'
import type { CategoryWithRelations, CategoryOptionalDefaultsWithRelations } from './CategorySchema'
import { SubjectWithRelationsSchema, SubjectOptionalDefaultsWithRelationsSchema } from './SubjectSchema'
import type { SubjectWithRelations, SubjectOptionalDefaultsWithRelations } from './SubjectSchema'
import { GradeWithRelationsSchema, GradeOptionalDefaultsWithRelationsSchema } from './GradeSchema'
import type { GradeWithRelations, GradeOptionalDefaultsWithRelations } from './GradeSchema'
import { SourceWithRelationsSchema, SourceOptionalDefaultsWithRelationsSchema } from './SourceSchema'
import type { SourceWithRelations, SourceOptionalDefaultsWithRelations } from './SourceSchema'
import { QuestionWithRelationsSchema, QuestionOptionalDefaultsWithRelationsSchema } from './QuestionSchema'
import type { QuestionWithRelations, QuestionOptionalDefaultsWithRelations } from './QuestionSchema'
import { TagWithRelationsSchema, TagOptionalDefaultsWithRelationsSchema } from './TagSchema'
import type { TagWithRelations, TagOptionalDefaultsWithRelations } from './TagSchema'
import { SystemLogWithRelationsSchema, SystemLogOptionalDefaultsWithRelationsSchema } from './SystemLogSchema'
import type { SystemLogWithRelations, SystemLogOptionalDefaultsWithRelations } from './SystemLogSchema'
import { TagCategoryWithRelationsSchema, TagCategoryOptionalDefaultsWithRelationsSchema } from './TagCategorySchema'
import type { TagCategoryWithRelations, TagCategoryOptionalDefaultsWithRelations } from './TagCategorySchema'
import { QuestionTagWithRelationsSchema, QuestionTagOptionalDefaultsWithRelationsSchema } from './QuestionTagSchema'
import type { QuestionTagWithRelations, QuestionTagOptionalDefaultsWithRelations } from './QuestionTagSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int().nullable(),
  updaterId: z.number().int().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  roles: UserRoleWithRelations[];
  createdRoles: RoleWithRelations[];
  updatedRoles: RoleWithRelations[];
  createdPermissions: PermissionWithRelations[];
  updatedPermissions: PermissionWithRelations[];
  createdCategories: CategoryWithRelations[];
  updatedCategories: CategoryWithRelations[];
  createdSubjects: SubjectWithRelations[];
  updatedSubjects: SubjectWithRelations[];
  createdGrades: GradeWithRelations[];
  updatedGrades: GradeWithRelations[];
  createdSources: SourceWithRelations[];
  updatedSources: SourceWithRelations[];
  createdQuestions: QuestionWithRelations[];
  updatedQuestions: QuestionWithRelations[];
  createdTags: TagWithRelations[];
  updatedTags: TagWithRelations[];
  systemLogs: SystemLogWithRelations[];
  createdTagCategories: TagCategoryWithRelations[];
  updatedTagCategories: TagCategoryWithRelations[];
  createdQuestionTags: QuestionTagWithRelations[];
  updatedQuestionTags: QuestionTagWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  roles: z.lazy(() => UserRoleWithRelationsSchema).array(),
  createdRoles: z.lazy(() => RoleWithRelationsSchema).array(),
  updatedRoles: z.lazy(() => RoleWithRelationsSchema).array(),
  createdPermissions: z.lazy(() => PermissionWithRelationsSchema).array(),
  updatedPermissions: z.lazy(() => PermissionWithRelationsSchema).array(),
  createdCategories: z.lazy(() => CategoryWithRelationsSchema).array(),
  updatedCategories: z.lazy(() => CategoryWithRelationsSchema).array(),
  createdSubjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  updatedSubjects: z.lazy(() => SubjectWithRelationsSchema).array(),
  createdGrades: z.lazy(() => GradeWithRelationsSchema).array(),
  updatedGrades: z.lazy(() => GradeWithRelationsSchema).array(),
  createdSources: z.lazy(() => SourceWithRelationsSchema).array(),
  updatedSources: z.lazy(() => SourceWithRelationsSchema).array(),
  createdQuestions: z.lazy(() => QuestionWithRelationsSchema).array(),
  updatedQuestions: z.lazy(() => QuestionWithRelationsSchema).array(),
  createdTags: z.lazy(() => TagWithRelationsSchema).array(),
  updatedTags: z.lazy(() => TagWithRelationsSchema).array(),
  systemLogs: z.lazy(() => SystemLogWithRelationsSchema).array(),
  createdTagCategories: z.lazy(() => TagCategoryWithRelationsSchema).array(),
  updatedTagCategories: z.lazy(() => TagCategoryWithRelationsSchema).array(),
  createdQuestionTags: z.lazy(() => QuestionTagWithRelationsSchema).array(),
  updatedQuestionTags: z.lazy(() => QuestionTagWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
  roles: UserRoleOptionalDefaultsWithRelations[];
  createdRoles: RoleOptionalDefaultsWithRelations[];
  updatedRoles: RoleOptionalDefaultsWithRelations[];
  createdPermissions: PermissionOptionalDefaultsWithRelations[];
  updatedPermissions: PermissionOptionalDefaultsWithRelations[];
  createdCategories: CategoryOptionalDefaultsWithRelations[];
  updatedCategories: CategoryOptionalDefaultsWithRelations[];
  createdSubjects: SubjectOptionalDefaultsWithRelations[];
  updatedSubjects: SubjectOptionalDefaultsWithRelations[];
  createdGrades: GradeOptionalDefaultsWithRelations[];
  updatedGrades: GradeOptionalDefaultsWithRelations[];
  createdSources: SourceOptionalDefaultsWithRelations[];
  updatedSources: SourceOptionalDefaultsWithRelations[];
  createdQuestions: QuestionOptionalDefaultsWithRelations[];
  updatedQuestions: QuestionOptionalDefaultsWithRelations[];
  createdTags: TagOptionalDefaultsWithRelations[];
  updatedTags: TagOptionalDefaultsWithRelations[];
  systemLogs: SystemLogOptionalDefaultsWithRelations[];
  createdTagCategories: TagCategoryOptionalDefaultsWithRelations[];
  updatedTagCategories: TagCategoryOptionalDefaultsWithRelations[];
  createdQuestionTags: QuestionTagOptionalDefaultsWithRelations[];
  updatedQuestionTags: QuestionTagOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  roles: z.lazy(() => UserRoleOptionalDefaultsWithRelationsSchema).array(),
  createdRoles: z.lazy(() => RoleOptionalDefaultsWithRelationsSchema).array(),
  updatedRoles: z.lazy(() => RoleOptionalDefaultsWithRelationsSchema).array(),
  createdPermissions: z.lazy(() => PermissionOptionalDefaultsWithRelationsSchema).array(),
  updatedPermissions: z.lazy(() => PermissionOptionalDefaultsWithRelationsSchema).array(),
  createdCategories: z.lazy(() => CategoryOptionalDefaultsWithRelationsSchema).array(),
  updatedCategories: z.lazy(() => CategoryOptionalDefaultsWithRelationsSchema).array(),
  createdSubjects: z.lazy(() => SubjectOptionalDefaultsWithRelationsSchema).array(),
  updatedSubjects: z.lazy(() => SubjectOptionalDefaultsWithRelationsSchema).array(),
  createdGrades: z.lazy(() => GradeOptionalDefaultsWithRelationsSchema).array(),
  updatedGrades: z.lazy(() => GradeOptionalDefaultsWithRelationsSchema).array(),
  createdSources: z.lazy(() => SourceOptionalDefaultsWithRelationsSchema).array(),
  updatedSources: z.lazy(() => SourceOptionalDefaultsWithRelationsSchema).array(),
  createdQuestions: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema).array(),
  updatedQuestions: z.lazy(() => QuestionOptionalDefaultsWithRelationsSchema).array(),
  createdTags: z.lazy(() => TagOptionalDefaultsWithRelationsSchema).array(),
  updatedTags: z.lazy(() => TagOptionalDefaultsWithRelationsSchema).array(),
  systemLogs: z.lazy(() => SystemLogOptionalDefaultsWithRelationsSchema).array(),
  createdTagCategories: z.lazy(() => TagCategoryOptionalDefaultsWithRelationsSchema).array(),
  updatedTagCategories: z.lazy(() => TagCategoryOptionalDefaultsWithRelationsSchema).array(),
  createdQuestionTags: z.lazy(() => QuestionTagOptionalDefaultsWithRelationsSchema).array(),
  updatedQuestionTags: z.lazy(() => QuestionTagOptionalDefaultsWithRelationsSchema).array(),
}))

export default UserSchema;
