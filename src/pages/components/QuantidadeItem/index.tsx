import { Minus, Plus } from 'phosphor-react'
import { QtddCoffee } from './styles'

export const QuantidadeItem = () => {
  return (
    <QtddCoffee>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>
      <p>1</p>
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </QtddCoffee>
  )
}
