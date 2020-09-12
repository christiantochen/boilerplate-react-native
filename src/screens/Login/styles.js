import { Item as NBItem } from 'native-base'
import styled from 'styled-components'

export const Wrapper = styled.View`
  flex: 1;
  padding-bottom: 10%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 10%;
`

export const FormWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: 20%;
`

export const FormItem = styled(NBItem)`
  margin-bottom: 18px;
`
