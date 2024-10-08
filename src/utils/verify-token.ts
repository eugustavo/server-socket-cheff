import { redis } from '../db/redis'

export async function verifyToken(token: string | null) {
  if (!token) {
    return false
  }

  const tokenRaw = await redis.get(token)
  const { token: existToken } = JSON.parse(tokenRaw || '{}')

  if (!existToken) {
    return false
  }

  return true
}
