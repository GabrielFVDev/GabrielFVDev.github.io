// localStorage pode lançar exceção (aba anônima, cookies bloqueados): a escolha
// só deixa de ser lembrada, o site segue funcionando.
export function remember(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // sem storage, sem memória
  }
}
