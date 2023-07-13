import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  width: 100%;
  gap: 2rem;
`

export const FormContainer = styled.div`
  min-width: 560px;
  flex-grow: 2;
  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.938rem;
  }

  form {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input {
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['base-button']};
      background: ${(props) => props.theme['base-input']};
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  gap: 0.5rem;
  min-width: 640px;
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};

  div p:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Content = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`

export const CEPAndStreetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input:first-child {
    max-width: 12.5rem;
  }
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input[type='number'] {
    flex-grow: 200px;
  }

  input[type='text'] {
    flex-grow: 16;
  }
`

export const LastContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input:nth-child(2) {
    flex-grow: 16;
  }
  input:nth-child(3) {
    max-width: 60px;
  }
`

export const PreviewContainer = styled.div`
  flex-grow: 1;
  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.938rem;
  }
`

export const PreviewContent = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`
export const PreviewCoffeeItem = styled.div`
  display: flex;
  gap: 1.25rem;
  strong {
    color: ${(props) => props.theme['base-text']};
  }
`
export const PreviewCoffeeItemContainer = styled.div`
  width: 100%;
`

export const ButtonsCoffeeItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 0.375rem;
  padding: 0 0.5rem;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  p {
    font-size: 0.75rem;
  }

  svg {
    color: ${(props) => props.theme['purple-normal']};
    transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const ImageCoffee = styled.img`
  width: 4rem;
  height: 4rem;
`
export const CoffeeDetails = styled.div`
  justify-content: space-between;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const PreviewFooter = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    padding-bottom: 0.75rem;
  }

  div:nth-child(3) {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 1.5rem;
  }

  button {
    display: flex;
    width: 100%;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-normal']};
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }

  button:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
