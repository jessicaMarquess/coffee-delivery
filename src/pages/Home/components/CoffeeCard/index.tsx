import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import americanoImage from '../../../../assets/americano.png'
import {
  BackgroundContainer,
  CoffeImg,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeType,
  ContentFooter,
  Price,
  QtddCoffee,
  Tag,
} from './style'

export const CoffeeCard = () => {
  return (
    <BackgroundContainer>
      <CoffeImg src={americanoImage} alt="" />
      <Tag>Tradicional</Tag>
      <CoffeeType>Expresso Tradicional</CoffeeType>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>
      <CoffeeFooter>
        <Price>
          <p>
            R$ <span>9,90</span>
          </p>
        </Price>
        <ContentFooter>
          <QtddCoffee>
            <Minus size={14} color="#8047F8" weight="bold" />
            <p>1</p>
            <Plus size={14} color="#8047F8" weight="bold" />
          </QtddCoffee>
          <div>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </ContentFooter>
      </CoffeeFooter>
    </BackgroundContainer>
  )
}
