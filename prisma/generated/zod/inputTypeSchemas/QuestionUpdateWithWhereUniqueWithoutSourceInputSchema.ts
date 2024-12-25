import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutSourceInputSchema } from './QuestionUpdateWithoutSourceInputSchema';
import { QuestionUncheckedUpdateWithoutSourceInputSchema } from './QuestionUncheckedUpdateWithoutSourceInputSchema';

export const QuestionUpdateWithWhereUniqueWithoutSourceInputSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutSourceInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QuestionUpdateWithoutSourceInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutSourceInputSchema) ]),
}).strict();

export default QuestionUpdateWithWhereUniqueWithoutSourceInputSchema;
