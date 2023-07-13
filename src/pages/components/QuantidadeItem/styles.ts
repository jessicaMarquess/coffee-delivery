import styled from 'styled-components'

export const QtddCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 4.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;

  p {
    font-size: 1rem;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: ${(props) => props.theme['purple-normal']};
    transition: color 0.2s ease-in;
    padding-top: 2px;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
