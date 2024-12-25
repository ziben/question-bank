import { z } from 'zod';
import { CategoryWithRelationsSchema, CategoryOptionalDefaultsWithRelationsSchema } from './CategorySchema'
import type { CategoryWithRelations, CategoryOptionalDefaultsWithRelations } from './CategorySchema'
import { SubjectWithRelationsSchema, SubjectOptionalDefaultsWithRelationsSchema } from './SubjectSchema'
import type { SubjectWithRelations, SubjectOptionalDefaultsWithRelations } from './SubjectSchema'
import { GradeWithRelationsSchema, GradeOptionalDefaultsWithRelationsSchema } from './GradeSchema'
import type { GradeWithRelations, GradeOptionalDefaultsWithRelations } from './GradeSchema'
import { SourceWithRelationsSchema, SourceOptionalDefaultsWithRelationsSchema } from './SourceSchema'
import type { SourceWithRelations, SourceOptionalDefaultsWithRelations } from './SourceSchema'
import { QuestionTagWithRelationsSchema, QuestionTagOptionalDefaultsWithRelationsSchema } from './QuestionTagSchema'
import type { QuestionTagWithRelations, QuestionTagOptionalDefaultsWithRelations } from './QuestionTagSchema'
import { UserWithRelationsSchema, UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import type { UserWithRelations, UserOptionalDefaultsWithRelations } from './UserSchema'

/////////////////////////////////////////
// QUESTION SCHEMA
/////////////////////////////////////////

export const QuestionSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  answer: z.string().nullable(),
  analysis: z.string().nullable(),
  difficulty: z.number().int(),
  status: z.string(),
  categoryId: z.number().int(),
  subjectId: z.number().int(),
  gradeId: z.number().int(),
  sourceId: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
})

export type Question = z.infer<typeof QuestionSchema>

/////////////////////////////////////////
// QUESTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuestionOptionalDefaultsSchema = QuestionSchema.merge(z.object({
  id: z.number().int().optional(),
  difficulty: z.number().int().optional(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
}))

export type QuestionOptionalDefaults = z.infer<typeof QuestionOptionalDefaultsSchema>

/////////////////////////////////////////
// QUESTION RELATION SCHEMA
/////////////////////////////////////////

export type QuestionRelations = {
  category: CategoryWithRelations;
  subject: SubjectWithRelations;
  grade: GradeWithRelations;
  source?: SourceWithRelations | null;
  tags: QuestionTagWithRelations[];
  createdBy: UserWithRelations;
  updatedBy: UserWithRelations;
};

export type QuestionWithRelations = z.infer<typeof QuestionSchema> & QuestionRelations

export const QuestionWithRelationsSchema: z.ZodType<QuestionWithRelations> = QuestionSchema.merge(z.object({
  category: z.lazy(() => CategoryWithRelationsSchema),
  subject: z.lazy(() => SubjectWithRelationsSchema),
  grade: z.lazy(() => GradeWithRelationsSchema),
  source: z.lazy(() => SourceWithRelationsSchema).nullable(),
  tags: z.lazy(() => QuestionTagWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserWithRelationsSchema),
  updatedBy: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// QUESTION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type QuestionOptionalDefaultsRelations = {
  category: CategoryOptionalDefaultsWithRelations;
  subject: SubjectOptionalDefaultsWithRelations;
  grade: GradeOptionalDefaultsWithRelations;
  source?: SourceOptionalDefaultsWithRelations | null;
  tags: QuestionTagOptionalDefaultsWithRelations[];
  createdBy: UserOptionalDefaultsWithRelations;
  updatedBy: UserOptionalDefaultsWithRelations;
};

export type QuestionOptionalDefaultsWithRelations = z.infer<typeof QuestionOptionalDefaultsSchema> & QuestionOptionalDefaultsRelations

export const QuestionOptionalDefaultsWithRelationsSchema: z.ZodType<QuestionOptionalDefaultsWithRelations> = QuestionOptionalDefaultsSchema.merge(z.object({
  category: z.lazy(() => CategoryOptionalDefaultsWithRelationsSchema),
  subject: z.lazy(() => SubjectOptionalDefaultsWithRelationsSchema),
  grade: z.lazy(() => GradeOptionalDefaultsWithRelationsSchema),
  source: z.lazy(() => SourceOptionalDefaultsWithRelationsSchema).nullable(),
  tags: z.lazy(() => QuestionTagOptionalDefaultsWithRelationsSchema).array(),
  createdBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  updatedBy: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

export default QuestionSchema;
