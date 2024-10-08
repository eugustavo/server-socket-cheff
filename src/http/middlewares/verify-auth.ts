import type { Request, Response, NextFunction } from 'express'

export async function verifyAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const apiKey = request.headers['api-key']

    if (apiKey !== process.env.API_KEY) {
      throw new Error()
    }

    next()
  } catch (err) {
    return response
      .status(401)
      .send({ message: 'Não autorizado! Informe uma API Key válida' })
  }
}
