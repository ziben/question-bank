import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserRoleCountOrderByAggregateInputSchema } from './UserRoleCountOrderByAggregateInputSchema';
import { UserRoleAvgOrderByAggregateInputSchema } from './UserRoleAvgOrderByAggregateInputSchema';
import { UserRoleMaxOrderByAggregateInputSchema } from './UserRoleMaxOrderByAggregateInputSchema';
import { UserRoleMinOrderByAggregateInputSchema } from './UserRoleMinOrderByAggregateInputSchema';
import { UserRoleSumOrderByAggregateInputSchema } from './UserRoleSumOrderByAggregateInputSchema';

export const UserRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserRoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserRoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserRoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserRoleSumOrderByAggregateInputSchema).optional()
}).strict();

export default UserRoleOrderByWithAggregationInputSchema;
