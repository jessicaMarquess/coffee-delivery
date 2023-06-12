import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BoxTags,
  CoffeImg,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeType,
  Container,
  ContentFooter,
  ItemCard,
  Price,
  QtddCoffee,
  Tag,
} from './style'
import React from 'react'
import { PropsData } from '../../../../../data.ts'

export const CoffeeCard: React.FC<{ coffeeData: PropsData[] }> = ({
  coffeeData,
}) => {
  return (
    <Container>
      {coffeeData.map((coffee) => {
        return (
          <ItemCard key={coffee.id}>
            <CoffeImg src={coffee.src} alt={coffee.descricao} />
            <BoxTags>
              {coffee.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </BoxTags>

            <CoffeeType>{coffee.nome}</CoffeeType>
            <CoffeeDescription>{coffee.descricao}</CoffeeDescription>
            <CoffeeFooter>
              <Price>
                <p>
                  R$ <span>{coffee.preco}</span>
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
          </ItemCard>
        )
      })}
    </Container>
  )
}
