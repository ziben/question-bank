import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionCreateWithoutSourceInputSchema } from './QuestionCreateWithoutSourceInputSchema';
import { QuestionUncheckedCreateWithoutSourceInputSchema } from './QuestionUncheckedCreateWithoutSourceInputSchema';

export const QuestionCreateOrConnectWithoutSourceInputSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutSourceInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QuestionCreateWithoutSourceInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSourceInputSchema) ]),
}).strict();

export default QuestionCreateOrConnectWithoutSourceInputSchema;
