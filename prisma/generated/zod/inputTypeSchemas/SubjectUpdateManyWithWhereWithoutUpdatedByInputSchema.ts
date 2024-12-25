import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutUpdatedByInputSchema } from './SubjectUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const SubjectUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutUpdatedByInputSchema;
