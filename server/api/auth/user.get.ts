import { createError, eventHandler, getRequestHeader } from 'h3'
import { verify } from 'jsonwebtoken'
import { extractToken, verifyToken,JWT_SECRET, tokensByUser, type TokenPayload } from '~/server/utils/auth'

export default eventHandler((event) => {
  const authorizationHeader = getRequestHeader(event, 'Authorization')
  if (typeof authorizationHeader === 'undefined') {
    throw createError({ statusCode: 403, statusMessage: 'Need to pass valid Bearer-authorization header to access this endpoint' })
  }

  const extractedToken = extractToken(authorizationHeader)
  let decoded: TokenPayload
  try {
    decoded = verifyToken(extractedToken) as TokenPayload
  }
  catch (error) {
    console.error({
      msg: 'Login failed. Here\'s the raw error:',
      error
    })
    throw createError({ statusCode: 403, statusMessage: 'You must be logged in to use this endpoint' })
  }

  // Check against known token
  const userTokens = tokensByUser.get(decoded.username)
  if (!userTokens || !userTokens.access.has(extractedToken)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized, user is not logged in'
    })
  }

  return decoded
})
