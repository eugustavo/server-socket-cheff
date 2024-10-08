import type { Express } from 'express'

import { generateMenu } from './generate-menu'
import { verifyAuth } from '../../middlewares/verify-auth'

export async function menuRoutes(app: Express) {
  app.post('/generate-menu', verifyAuth, generateMenu)
}
