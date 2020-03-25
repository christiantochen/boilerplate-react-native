import { Input as NBInput, Label as NBLabel, Text as NBText } from 'native-base'
import styled from 'styled-components'

export const Input = styled(NBInput).attrs({
  autoCapitalize: 'none',
})`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
`

export const Text = styled(NBText)`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
`

export const Label = styled(NBLabel)`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
`
