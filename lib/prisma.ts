import { Prisma, PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  }).$extends({
    client: {
      $log: (s: string) => console.log(s),
      async $totalQueries() {
        const index_prisma_client_queries_total = 0
        // Prisma.getExtensionContext(this) in the following block
        // returns the current client instance
        const metricsCounters = await (
          await Prisma.getExtensionContext(this).$metrics.json()
        ).counters

        return metricsCounters[index_prisma_client_queries_total].value
      },
    },
    query: {
      $allModels: {
        $allOperations({ model, operation, args, query }) {
          // Check incoming query type
          if (operation == 'delete') {
            args.where['isDeleted'] = true
          }
          if (operation == 'deleteMany') {
            if (args.data != undefined) {
              args.data['isDeleted'] = true
            } else {
              args['data'] = { isDeleted: true }
            }
          }
          return query(args)
        },
      },
    },
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export type CustomPrismaClient = ReturnType<typeof prismaClientSingleton>;
export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
