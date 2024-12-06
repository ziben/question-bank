import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// This is just for type checking
async function test() {
    const log = await prisma.systemLog.findFirst()
    console.log(log)
}
