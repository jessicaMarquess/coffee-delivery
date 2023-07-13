import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-column: 3;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
`

export const ItemCard = styled.div`
  width: 16rem;
  max-height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CoffeImg = styled.img`
  position: absolute;
  margin-top: -1rem;
`
export const BoxTags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 6rem;
  text-transform: uppercase;
`

export const Tag = styled.p`
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  font-weight: 700;
`

export const CoffeeType = styled.p`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};

  margin-top: 0.5rem;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};

  margin: 0rem 1.25rem;
`

export const CoffeeFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.063rem 1.5rem 1.25rem 1.5rem;
`

export const Price = styled.div`
  color: ${(props) => props.theme['base-text']};
  p {
    font-size: 0.875rem;
    font-weight: 400;
  }
  p span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.25rem;
  }
`

export const ContentFooter = styled.div`
  display: flex;
  gap: 0.5rem;

  div:last-child {
    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    cursor: pointer;

    &:hover {
      transition: background-color 0.2s ease-in;
      background-color: ${(props) => props.theme['purple-normal']};
    }
  }
`
