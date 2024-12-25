import { z } from 'zod';

export const GradeScalarFieldEnumSchema = z.enum(['id','name','description','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default GradeScalarFieldEnumSchema;
