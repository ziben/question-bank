import { defineEventHandler, getQuery, readBody } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 获取指定类别的所有标签
export const GET = defineEventHandler(async (event) => {
  const query = getQuery(event)  
  const categoryId = event.context.params?.categoryId

  try {
    const tags = await prisma.tag.findMany({
      where: { categoryId: Number(categoryId) },
      orderBy: [
        { parentId: 'asc' },
        { sortOrder: 'asc' }
      ],
      include: {
        parent: true,
        children: true
      }
    })
    return { tags }
  } catch (error) {
    console.error('Error fetching tags:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch tags'
    })
  }
})

// 创建新标签
export const POST = defineEventHandler(async (event) => {
  const categoryId = event.context.params?.categoryId
  const body = await readBody(event)
  const { name, code, description, parentId, sortOrder } = body

  try {
    const tag = await prisma.tag.create({
      data: {
        name,
        code,
        description,
        parentId,
        sortOrder,
        categoryId: Number(categoryId),
        createdById: 1, // TODO: 从session获取当前用户ID
        updatedById: 1
      }
    })
    return { tag }
  } catch (error) {
    console.error('Error creating tag:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create tag'
    })
  }
})

// 更新标签
export const PUT = defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, name, code, description, parentId, sortOrder } = body

  try {
    const tag = await prisma.tag.update({
      where: { id },
      data: {
        name,
        code,
        description,
        parentId,
        sortOrder,
        updatedById: 1 // TODO: 从session获取当前用户ID
      }
    })
    return { tag }
  } catch (error) {
    console.error('Error updating tag:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to update tag'
    })
  }
})

// 删除标签
export const DELETE = defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { id } = query

  try {
    await prisma.tag.delete({
      where: { id: Number(id) }
    })
    return { success: true }
  } catch (error) {
    console.error('Error deleting tag:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete tag'
    })
  }
})
