import { customAlphabet } from 'nanoid'

interface GenerateTokenProps {
  prefix?: string
  rounds: number
}

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

export function generateToken({ prefix, rounds }: GenerateTokenProps) {
  const nanoid = customAlphabet(ALPHABET)
  const token = prefix ? `${prefix}_${nanoid(rounds)}` : nanoid(rounds)

  return { token }
}
