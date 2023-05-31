import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { Container, Header, LocaleContainer } from './style'

export const Home = () => {
  return (
    <>
      <Header>
        <img
          src={logo}
          alt="Logo da Coffee Delivery, uma imagem de copo roxo junto com o nome da empresa."
        />
        <Container>
          <LocaleContainer>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </LocaleContainer>
          <div>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </Container>
      </Header>
      <body> aqui é o body</body>
    </>
  )
}
