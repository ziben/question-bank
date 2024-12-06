import { defineEventHandler, createError } from 'h3'
import { handleError } from '../utils/response'

export default defineEventHandler((event) => {
  // 捕获所有未处理的错误
  event.res.on('error', (error) => {
    console.error('Server Error:', error)
    return handleError(error, event)
  })

  // 处理 404 错误
  if (!event.path) {
    throw createError({
      statusCode: 404,
      message: '页面不存在'
    })
  }
})
