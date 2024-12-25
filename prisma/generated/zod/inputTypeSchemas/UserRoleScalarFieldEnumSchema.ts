import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum(['id','userId','roleId','createdAt','updatedAt']);

export default UserRoleScalarFieldEnumSchema;
