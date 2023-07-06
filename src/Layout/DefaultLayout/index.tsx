import { Outlet } from 'react-router-dom'
import { Header, LocaleContainer, Navbar } from './style'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const DefaultLayout = () => {
  return (
    <>
      <Header>
        <img
          src={logo}
          alt="Logo da Coffee Delivery, uma imagem de copo roxo junto com o nome da empresa."
        />
        <Navbar>
          <LocaleContainer>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </LocaleContainer>
          <a href="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </Navbar>
      </Header>
      <Outlet />
    </>
  )
}
