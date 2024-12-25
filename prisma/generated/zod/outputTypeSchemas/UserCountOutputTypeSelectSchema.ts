import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  roles: z.boolean().optional(),
  createdRoles: z.boolean().optional(),
  updatedRoles: z.boolean().optional(),
  createdPermissions: z.boolean().optional(),
  updatedPermissions: z.boolean().optional(),
  createdCategories: z.boolean().optional(),
  updatedCategories: z.boolean().optional(),
  createdSubjects: z.boolean().optional(),
  updatedSubjects: z.boolean().optional(),
  createdGrades: z.boolean().optional(),
  updatedGrades: z.boolean().optional(),
  createdSources: z.boolean().optional(),
  updatedSources: z.boolean().optional(),
  createdQuestions: z.boolean().optional(),
  updatedQuestions: z.boolean().optional(),
  createdTags: z.boolean().optional(),
  updatedTags: z.boolean().optional(),
  systemLogs: z.boolean().optional(),
  createdTagCategories: z.boolean().optional(),
  updatedTagCategories: z.boolean().optional(),
  createdQuestionTags: z.boolean().optional(),
  updatedQuestionTags: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
