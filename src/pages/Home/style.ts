import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;
`
export const Navbar = styled.div`
  display: flex;
  gap: 0.75rem;
  div:last-child {
    display: flex;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 0.375rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
  }
`

export const LocaleContainer = styled.div`
  display: flex;
  background: #ebe5f9;
  border-radius: 0.375rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-normal']};
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const BodyContainer = styled.body`
  display: flex;
  padding: 5.875rem 10rem 5.75rem 10rem;
  gap: 3.5rem;
  justify-content: space-between;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PresentationContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ImageCoffeeDelivery = styled.div`
  min-width: 29.75rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  padding-right: 2.5rem;
  margin-top: 4.125rem;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
`

const BG_COLOR = {
  yellowDark: 'yellow-dark',
  yellowBrand: 'yellow-normal',
  baseText: 'base-text',
  purpleBrand: 'purple-normal',
} as const

interface IconContainerProps {
  bgColor: keyof typeof BG_COLOR
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50%;
  margin-right: 0.75rem;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme[BG_COLOR[props.bgColor]]};
`
export const ItemsCoffee = styled.div`
  padding: 2rem 10rem 100rem 10rem;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 3.375rem;
  }
`
