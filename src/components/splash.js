import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  background-color: ${props => props.theme.color.accent};
  flex: 1;
`

export default function Splash(props) {
  return <Wrapper></Wrapper>
}
