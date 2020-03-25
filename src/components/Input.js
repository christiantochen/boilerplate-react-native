import styled from 'styled-components'
import { Input as NBInput } from 'native-base'

export const Input = styled(NBInput).attrs({
  autoCapitalize: 'none',
})`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
`
