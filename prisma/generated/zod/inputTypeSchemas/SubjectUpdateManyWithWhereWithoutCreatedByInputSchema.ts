import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutCreatedByInputSchema } from './SubjectUncheckedUpdateManyWithoutCreatedByInputSchema';

export const SubjectUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutCreatedByInputSchema;
