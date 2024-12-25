import { z } from 'zod';

export const TagCategoryScalarFieldEnumSchema = z.enum(['id','name','code','description','allowMultiple','sortOrder','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default TagCategoryScalarFieldEnumSchema;
