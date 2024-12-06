import { H3Event } from 'h3'
import { RateLimiter } from 'limiter'

const limiters = new Map<string, RateLimiter>()

export default defineEventHandler(async (event: H3Event) => {
  const ip = getRequestIP(event)
  if (!ip) return

  // 获取或创建限制器
  let limiter = limiters.get(ip)
  if (!limiter) {
    // 每15分钟100次请求
    limiter = new RateLimiter({
      tokensPerInterval: 100,
      interval: 15 * 60 * 1000  // 15 minutes in milliseconds
    })
    limiters.set(ip, limiter)
  }

  // 清理过期的限制器
  // 清理过期的限制器
  if (limiters.size > 10000) {
    for (const [key, value] of limiters.entries()) {
      // 如果令牌数已经恢复到最大值，说明很久没有请求了
      if (value.getTokensRemaining() >= 100) {
        limiters.delete(key)
      }
    }
  }

  // 检查是否超出限制
  const remainingRequests = await limiter.removeTokens(1)
  if (remainingRequests < 0) {
    throw createError({
      statusCode: 429,
      message: '请求过于频繁，请稍后再试'
    })
  }
})
