import { z } from 'zod';

export const QuestionScalarFieldEnumSchema = z.enum(['id','title','content','answer','analysis','difficulty','status','categoryId','subjectId','gradeId','sourceId','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default QuestionScalarFieldEnumSchema;
