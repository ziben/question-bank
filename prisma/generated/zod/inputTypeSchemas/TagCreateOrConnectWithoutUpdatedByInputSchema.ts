import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutUpdatedByInputSchema } from './TagCreateWithoutUpdatedByInputSchema';
import { TagUncheckedCreateWithoutUpdatedByInputSchema } from './TagUncheckedCreateWithoutUpdatedByInputSchema';

export const TagCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutUpdatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutUpdatedByInputSchema;
