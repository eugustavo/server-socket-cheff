import type { Express } from 'express'

import { generateToken } from './generate-token'
import { verifyAuth } from '../../middlewares/verify-auth'

export async function tokenRoutes(app: Express) {
  app.get('/generate-token', verifyAuth, generateToken)
}
