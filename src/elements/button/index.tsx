import styled from 'styled-components'
import { IButton } from './button.type'

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Button = ({ children, ...button }: IButton) => {
  return <StyledButton {...button}>{children}</StyledButton>
}

export default Button
