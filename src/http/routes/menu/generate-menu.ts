import { z } from 'zod'
import type { Request, Response } from 'express'
import { generateMenu as genMenu } from '@/functions/generate-menu'

export async function generateMenu(req: Request, res: Response) {
  const generateMenuSchema = z.object({
    bannerURL: z
      .string({ message: 'Banner é obrigatório' })
      .nonempty({ message: 'Banner é obrigatório' }),
    logoURL: z
      .string({ message: 'Logo é obrigatório' })
      .nonempty({ message: 'Logo é obrigatório' }),
    token: z.string().nonempty({ message: 'Token é obrigatório' }),
  })

  try {
    const { bannerURL, logoURL, token } = generateMenuSchema.parse(req.body)

    const { menuToken } = await genMenu({
      bannerURL,
      logoURL,
      token,
    })

    return res.json({ menuToken })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message })
    }

    return res.status(500).json({ error: 'Erro no servidor. Tente novamente' })
  }
}
