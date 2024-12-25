import { z } from 'zod';

export const SystemLogScalarFieldEnumSchema = z.enum(['id','userId','module','action','target','targetId','detail','ip','userAgent','createdAt','updatedAt']);

export default SystemLogScalarFieldEnumSchema;
