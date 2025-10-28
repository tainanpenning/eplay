export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, total) => {
    if (total.prices.current) {
      return (acc += total.prices.current)
    }
    return 0
  }, 0)
}
