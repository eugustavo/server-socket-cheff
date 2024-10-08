import type { Request, Response } from 'express'

import { generateToken as genToken } from '@/utils/generate-token'
import { redis } from '@/db/redis'

export async function generateToken(req: Request, res: Response) {
  const { token } = genToken({ prefix: 'tcd', rounds: 16 })

  await redis.set(token, JSON.stringify({ token }))

  return res.json({ token })
}
