import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','username','email','password','name','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default UserScalarFieldEnumSchema;
