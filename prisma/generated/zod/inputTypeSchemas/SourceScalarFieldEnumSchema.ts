import { z } from 'zod';

export const SourceScalarFieldEnumSchema = z.enum(['id','name','type','description','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default SourceScalarFieldEnumSchema;
