import styled from 'styled-components'

export const BodyContainer = styled.body`
  display: flex;
  padding: 5.875rem 0rem 5.75rem 0;
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
  padding: 2rem 0 100rem 0;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 3.375rem;
  }
`
