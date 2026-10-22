export type StatementWord = {
  word: string
  accent: boolean
  start: number
  end: number
}

const round = (n: number) => Math.round(n * 10) / 10

// Cada palavra acende numa faixa própria da rolagem: começa em 5%, a última em 77%,
// e cada uma leva 8% para ir do cinza à cor. Palavras com * vão para a cor de destaque.
export function splitStatement(text: string): StatementWord[] {
  const tokens = text.split(' ')
  const step = 72 / (tokens.length - 1)

  return tokens.map((token, i) => {
    const accent = token.startsWith('*')
    const start = 5 + i * step
    return {
      word: accent ? token.slice(1) : token,
      accent,
      start: round(start),
      end: round(start + 8),
    }
  })
}
