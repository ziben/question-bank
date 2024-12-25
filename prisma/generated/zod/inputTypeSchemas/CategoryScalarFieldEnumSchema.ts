import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','description','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default CategoryScalarFieldEnumSchema;
