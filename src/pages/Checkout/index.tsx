import { MapPinLine } from 'phosphor-react'
import {
  CEPAndStreetContainer,
  Content,
  FormContainer,
  HeaderContent,
  LastContainer,
  MainContainer,
  NumberAndComplementContainer,
  PreviewContainer,
} from './style'

export const Checkout = () => {
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
      </PreviewContainer>
    </MainContainer>
  )
}
