import { z } from 'zod';

export const QuestionTagScalarFieldEnumSchema = z.enum(['id','questionId','tagId','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default QuestionTagScalarFieldEnumSchema;
