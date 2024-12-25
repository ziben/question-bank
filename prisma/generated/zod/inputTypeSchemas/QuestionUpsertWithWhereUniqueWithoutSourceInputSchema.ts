import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithoutSourceInputSchema } from './QuestionUpdateWithoutSourceInputSchema';
import { QuestionUncheckedUpdateWithoutSourceInputSchema } from './QuestionUncheckedUpdateWithoutSourceInputSchema';
import { QuestionCreateWithoutSourceInputSchema } from './QuestionCreateWithoutSourceInputSchema';
import { QuestionUncheckedCreateWithoutSourceInputSchema } from './QuestionUncheckedCreateWithoutSourceInputSchema';

export const QuestionUpsertWithWhereUniqueWithoutSourceInputSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutSourceInput> = z.object({
  where: z.lazy(() => QuestionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QuestionUpdateWithoutSourceInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutSourceInputSchema) ]),
  create: z.union([ z.lazy(() => QuestionCreateWithoutSourceInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSourceInputSchema) ]),
}).strict();

export default QuestionUpsertWithWhereUniqueWithoutSourceInputSchema;
