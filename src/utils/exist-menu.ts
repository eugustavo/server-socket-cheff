import { redis } from '../db/redis'

export async function existMenu(token: string) {
  const dataRaw = await redis.get(token)
  const { menu } = JSON.parse(dataRaw || '')

  if (!menu) {
    return {
      existMenu: false,
    }
  }

  return {
    existMenu: true,
    menuToken: menu,
  }
}
