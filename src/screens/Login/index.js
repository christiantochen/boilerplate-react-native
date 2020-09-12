import { H1 } from 'native-base'
import React from 'react'

import LoginCard from './LoginCard'
import { Wrapper } from './styles'

export default function Login() {
  return (
    <Wrapper>
      <H1>Hello,</H1>
      <H1>Welcome Back!</H1>
      <LoginCard />
    </Wrapper>
  )
}
