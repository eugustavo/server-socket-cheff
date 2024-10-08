import { redis } from '@/db/redis'
import { generateToken } from '@/utils/generate-token'

interface GenerateMenuProps {
  bannerURL: string
  logoURL: string
  token: string
}

export async function generateMenu({
  bannerURL,
  logoURL,
  token,
}: GenerateMenuProps) {
  const tokenRaw = await redis.get(token)
  const { menu } = JSON.parse(tokenRaw || '{}')

  if (menu) {
    await redis.set(menu, JSON.stringify({ bannerURL, logoURL, token }))

    return { menuToken: menu }
  }

  const { token: menuToken } = generateToken({ rounds: 10 })
  redis.set(menuToken, JSON.stringify({ bannerURL, logoURL, token }))
  redis.set(token, JSON.stringify({ token, menu: menuToken }))

  return { menuToken }
}
