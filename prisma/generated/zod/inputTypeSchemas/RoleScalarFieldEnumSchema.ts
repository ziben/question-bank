import { z } from 'zod';

export const RoleScalarFieldEnumSchema = z.enum(['id','name','code','description','permissions','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default RoleScalarFieldEnumSchema;
