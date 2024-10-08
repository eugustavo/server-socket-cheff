import { redis } from '../db/redis'

interface MenuResponse {
  menuExists: boolean
  menu?: {
    token: string
    bannerURL: string
    logoURL: string
  }
}

export async function verifyMenu(
  menuToken: string | null
): Promise<MenuResponse> {
  if (!menuToken) {
    return { menuExists: false }
  }

  const dataRaw = await redis.get(menuToken)
  const menu = JSON.parse(dataRaw || '{}')

  if (!menu.token) {
    return { menuExists: false }
  }

  return { menuExists: true, menu }
}
