import styled from 'styled-components'
import { color, space } from 'styles/theme'

export const Input = styled.input`
  background: white;
  border: 1px solid ${color('gray', 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`
