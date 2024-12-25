import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserRoleOrderByRelationAggregateInputSchema } from './UserRoleOrderByRelationAggregateInputSchema';
import { RoleOrderByRelationAggregateInputSchema } from './RoleOrderByRelationAggregateInputSchema';
import { PermissionOrderByRelationAggregateInputSchema } from './PermissionOrderByRelationAggregateInputSchema';
import { CategoryOrderByRelationAggregateInputSchema } from './CategoryOrderByRelationAggregateInputSchema';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema';
import { GradeOrderByRelationAggregateInputSchema } from './GradeOrderByRelationAggregateInputSchema';
import { SourceOrderByRelationAggregateInputSchema } from './SourceOrderByRelationAggregateInputSchema';
import { QuestionOrderByRelationAggregateInputSchema } from './QuestionOrderByRelationAggregateInputSchema';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema';
import { SystemLogOrderByRelationAggregateInputSchema } from './SystemLogOrderByRelationAggregateInputSchema';
import { TagCategoryOrderByRelationAggregateInputSchema } from './TagCategoryOrderByRelationAggregateInputSchema';
import { QuestionTagOrderByRelationAggregateInputSchema } from './QuestionTagOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updaterId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  roles: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
  createdRoles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  updatedRoles: z.lazy(() => RoleOrderByRelationAggregateInputSchema).optional(),
  createdPermissions: z.lazy(() => PermissionOrderByRelationAggregateInputSchema).optional(),
  updatedPermissions: z.lazy(() => PermissionOrderByRelationAggregateInputSchema).optional(),
  createdCategories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  updatedCategories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  createdSubjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  updatedSubjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  createdGrades: z.lazy(() => GradeOrderByRelationAggregateInputSchema).optional(),
  updatedGrades: z.lazy(() => GradeOrderByRelationAggregateInputSchema).optional(),
  createdSources: z.lazy(() => SourceOrderByRelationAggregateInputSchema).optional(),
  updatedSources: z.lazy(() => SourceOrderByRelationAggregateInputSchema).optional(),
  createdQuestions: z.lazy(() => QuestionOrderByRelationAggregateInputSchema).optional(),
  updatedQuestions: z.lazy(() => QuestionOrderByRelationAggregateInputSchema).optional(),
  createdTags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  updatedTags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  systemLogs: z.lazy(() => SystemLogOrderByRelationAggregateInputSchema).optional(),
  createdTagCategories: z.lazy(() => TagCategoryOrderByRelationAggregateInputSchema).optional(),
  updatedTagCategories: z.lazy(() => TagCategoryOrderByRelationAggregateInputSchema).optional(),
  createdQuestionTags: z.lazy(() => QuestionTagOrderByRelationAggregateInputSchema).optional(),
  updatedQuestionTags: z.lazy(() => QuestionTagOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
