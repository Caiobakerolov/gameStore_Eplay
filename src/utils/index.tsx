import { Game } from '../pages/Home'

export const parseToAus = (amount = 0) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'AUS'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}
