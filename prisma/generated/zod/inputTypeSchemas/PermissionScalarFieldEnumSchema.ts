import { z } from 'zod';

export const PermissionScalarFieldEnumSchema = z.enum(['id','groupName','groupCode','actionName','actionCode','code','description','createdAt','updatedAt','isDeleted','creatorId','updaterId']);

export default PermissionScalarFieldEnumSchema;
