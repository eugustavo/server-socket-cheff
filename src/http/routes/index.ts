import type { Express } from 'express'

import { tokenRoutes } from './token'
import { menuRoutes } from './menu'

export function routes(app: Express) {
  tokenRoutes(app)
  menuRoutes(app)
}
