import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';
import { QuestionUpdateManyMutationInputSchema } from './QuestionUpdateManyMutationInputSchema';
import { QuestionUncheckedUpdateManyWithoutSourceInputSchema } from './QuestionUncheckedUpdateManyWithoutSourceInputSchema';

export const QuestionUpdateManyWithWhereWithoutSourceInputSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutSourceInput> = z.object({
  where: z.lazy(() => QuestionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateManyMutationInputSchema),z.lazy(() => QuestionUncheckedUpdateManyWithoutSourceInputSchema) ]),
}).strict();

export default QuestionUpdateManyWithWhereWithoutSourceInputSchema;
