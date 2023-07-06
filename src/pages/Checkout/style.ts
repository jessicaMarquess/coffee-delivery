import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  flex: 80% 20%;
  gap: 2rem;
`

export const FormContainer = styled.div`
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
  h1 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.938rem;
  }
`
