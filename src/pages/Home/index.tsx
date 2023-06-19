import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCoffeeDelivery from '../../assets/imageCoffeeDelivery.png'
import {
  IntroContainer,
  PresentationContainer,
  BenefitsContainer,
  ImageCoffeeDelivery,
  IconContainer,
  ItemContainer,
  BodyContainer,
  ItemsCoffee,
} from './style'
import { CoffeeCard } from './components/CoffeeCard'
import dataCoffee from '../../../data'

export const Home = () => {
  return (
    <>
      <BodyContainer>
        <IntroContainer>
          <PresentationContainer>
            <h1>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </PresentationContainer>
          <BenefitsContainer>
            <ItemContainer>
              <IconContainer bgColor="yellowDark">
                <ShoppingCart size={16} weight="fill" color="#FAFAFA" />
              </IconContainer>
              <p>Compra simples e segura</p>
            </ItemContainer>
            <ItemContainer>
              <IconContainer bgColor="baseText">
                <Package size={16} weight="fill" color="#FAFAFA" />
              </IconContainer>
              <p>Embalagem mantém o café intacto</p>
            </ItemContainer>
            <ItemContainer>
              <IconContainer bgColor="yellowBrand">
                <Timer size={16} weight="fill" color="#FAFAFA" />
              </IconContainer>
              <p>Entrega rápida e rastreada</p>
            </ItemContainer>
            <ItemContainer>
              <IconContainer bgColor="purpleBrand">
                <Coffee size={16} weight="fill" color="#FAFAFA" />
              </IconContainer>
              <p>O café chega fresquinho até você</p>
            </ItemContainer>
          </BenefitsContainer>
        </IntroContainer>

        <ImageCoffeeDelivery>
          <img
            src={imageCoffeeDelivery}
            alt="Imagem representativa de um copo de café e alguns tipos de grãos e moído."
          />
        </ImageCoffeeDelivery>
      </BodyContainer>
      <ItemsCoffee>
        <h1>Nossos cafés</h1>
        <CoffeeCard coffeeData={dataCoffee} />
      </ItemsCoffee>
    </>
  )
}
