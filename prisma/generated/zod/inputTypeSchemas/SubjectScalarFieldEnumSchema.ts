import { z } from 'zod';

export const SubjectScalarFieldEnumSchema = z.enum(['id','name','description','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default SubjectScalarFieldEnumSchema;
