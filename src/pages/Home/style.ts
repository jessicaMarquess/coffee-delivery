import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
`
export const Container = styled.div`
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
