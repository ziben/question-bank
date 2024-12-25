import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id','name','code','description','sortOrder','categoryId','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default TagScalarFieldEnumSchema;
