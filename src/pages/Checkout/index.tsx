import { MapPinLine, Trash } from 'phosphor-react'
import {
  ButtonsCoffeeItem,
  CEPAndStreetContainer,
  CoffeeDetails,
  Content,
  Divider,
  FormContainer,
  HeaderContent,
  ImageCoffee,
  LastContainer,
  MainContainer,
  NumberAndComplementContainer,
  PreviewCoffeeItem,
  PreviewCoffeeItemContainer,
  PreviewContainer,
  PreviewContent,
  PreviewFooter,
  RemoveButton,
} from './style'
import dataCoffee from '../../../data'
import { QuantidadeItem } from '../components/QuantidadeItem'

export const Checkout = () => {
  console.log(dataCoffee)
  return (
    <MainContainer>
      <FormContainer>
        <h1>Complete seu pedido</h1>
        <form>
          <HeaderContent>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderContent>
          <Content>
            <CEPAndStreetContainer>
              <input type="number" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
            </CEPAndStreetContainer>
            <NumberAndComplementContainer>
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </NumberAndComplementContainer>
            <LastContainer>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </LastContainer>
          </Content>
        </form>
      </FormContainer>
      <PreviewContainer>
        <h1>Cafés selecionados</h1>
        <PreviewContent>
          <PreviewCoffeeItem>
            <ImageCoffee
              src={dataCoffee[0].src}
              alt={dataCoffee[0].descricao}
            ></ImageCoffee>
            <PreviewCoffeeItemContainer>
              <CoffeeDetails>
                <p>{dataCoffee[0].nome}</p>
              </CoffeeDetails>
              <ButtonsCoffeeItem>
                <QuantidadeItem />
                <RemoveButton>
                  <Trash size={16} weight="regular" />
                  <p>REMOVER</p>
                </RemoveButton>
              </ButtonsCoffeeItem>
            </PreviewCoffeeItemContainer>
            <strong>R${dataCoffee[0].preco}</strong>
          </PreviewCoffeeItem>
          <Divider />
          <PreviewCoffeeItem>
            <ImageCoffee
              src={dataCoffee[2].src}
              alt={dataCoffee[2].descricao}
            ></ImageCoffee>
            <PreviewCoffeeItemContainer>
              <CoffeeDetails>
                <p>{dataCoffee[2].nome}</p>
              </CoffeeDetails>
              <ButtonsCoffeeItem>
                <QuantidadeItem />
                <RemoveButton>
                  <Trash size={16} weight="regular" />
                  <p>REMOVER</p>
                </RemoveButton>
              </ButtonsCoffeeItem>
            </PreviewCoffeeItemContainer>
            <strong>R${dataCoffee[2].preco}</strong>
          </PreviewCoffeeItem>
          <Divider />
          <PreviewFooter>
            <div>
              <p>Total de itens</p>
              <p>R$ 14,22</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
            <button type="button">CONFIRMAR PERDIDO</button>
          </PreviewFooter>
        </PreviewContent>
      </PreviewContainer>
    </MainContainer>
  )
}
