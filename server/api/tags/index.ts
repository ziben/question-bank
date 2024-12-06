import { defineEventHandler, getQuery, readBody } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 获取所有标签类别及其标签
export const GET = defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { withTags = true } = query

  try {
    const categories = await prisma.tagCategory.findMany({
      orderBy: { sortOrder: 'asc' },
      include: withTags ? {
        tags: {
          orderBy: [
            { parentId: 'asc' },
            { sortOrder: 'asc' }
          ],
        }
      } : undefined
    })
    return { categories }
  } catch (error) {
    console.error('Error fetching tag categories:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch tag categories'
    })
  }
})

// 创建新标签类别
export const POST = defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, code, description, allowMultiple, sortOrder } = body

  try {
    const category = await prisma.tagCategory.create({
      data: {
        name,
        code,
        description,
        allowMultiple,
        sortOrder,
        createdById: 1, // TODO: 从session获取当前用户ID
        updatedById: 1
      }
    })
    return { category }
  } catch (error) {
    console.error('Error creating tag category:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create tag category'
    })
  }
})

// 更新标签类别
export const PUT = defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, name, code, description, allowMultiple, sortOrder } = body

  try {
    const category = await prisma.tagCategory.update({
      where: { id },
      data: {
        name,
        code,
        description,
        allowMultiple,
        sortOrder,
        updatedById: 1 // TODO: 从session获取当前用户ID
      }
    })
    return { category }
  } catch (error) {
    console.error('Error updating tag category:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update tag category'
    })
  }
})

// 删除标签类别
export const DELETE = defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { id } = query

  try {
    await prisma.tagCategory.delete({
      where: { id: Number(id) }
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting tag category:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete tag category'
    })
  }
})
