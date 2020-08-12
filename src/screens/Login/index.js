import { Button, Form, Icon, Input, Item, Label, Text } from 'native-base'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AUTH_ACTION_LOGIN } from '../../redux/actions'
import { Wrapper } from './styles'

export default function Login() {
  const dispatch = useDispatch()
  const [auth, isLoading] = useSelector(state => [state.auth, state.loading])
  const [username, setUsername] = useState(auth.username)
  const [password, setPassword] = useState(auth.password)

  function onPressedLoginButton() {
    dispatch({ type: AUTH_ACTION_LOGIN, username, password })
  }

  return (
    <Wrapper>
      <Form style={{ flex: 1 }}>
        <Item stackedLabel success last>
          <Label>Username</Label>
          <Input autoCapitalize="none" value={username} onChangeText={setUsername} />
          <Icon name="chatbubble" />
        </Item>
        <Item stackedLabel error last>
          <Label>Password</Label>
          <Input secureTextEntry={true} autoCapitalize="none" value={password} onChangeText={setPassword} />
          <Icon name="close-circle" />
        </Item>
      </Form>
      <Button full onPress={onPressedLoginButton} disabled={isLoading}>
        <Text>Login</Text>
      </Button>
    </Wrapper>
  )
}
