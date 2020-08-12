import { Body, Button, Card, CardItem, Form, H3, Icon, Input, Item, Label, Left, Right, Text } from 'native-base'
import React, { useState } from 'react'
import { ViewPropTypes } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AUTH_ACTION_LOGIN } from '../../redux/actions'

export default function LoginCard({ style }) {
  const dispatch = useDispatch()
  const [auth, isLoading] = useSelector(state => [state.auth, state.loading])
  const [form, setForm] = useState({ username: auth.username, password: auth.password })
  const [error, setError] = useState({ username: false, password: false })

  function validateForm() {
    const usernameIsError = !form.username || form.username.length === 0
    const passwordIsError = !form.password || form.password.length === 0

    setError({ username: usernameIsError, password: passwordIsError })

    return !usernameIsError && !passwordIsError
  }

  function handleOnChangeText(field, value) {
    setForm({ ...form, [field]: value })
    setError({ ...error, [field]: value.length === 0 })
  }

  function onPressedLoginButton() {
    if (validateForm()) {
      dispatch({ type: AUTH_ACTION_LOGIN, ...form })
    }
  }

  return (
    <Card style={style}>
      <CardItem header>
        <H3>Welcome</H3>
      </CardItem>
      <CardItem>
        <Form style={{ flex: 1 }}>
          <Item inlineLabel error={error.username} last>
            <Label>Username</Label>
            <Input
              autoCapitalize="none"
              value={form.username}
              onChangeText={handleOnChangeText.bind(this, 'username')}
            />
            {error.username && <Icon name="close-circle" />}
          </Item>
          <Item inlineLabel error={error.password} last>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              value={form.password}
              onChangeText={handleOnChangeText.bind(this, 'password')}
            />
            {error.password && <Icon name="close-circle" />}
          </Item>
        </Form>
      </CardItem>
      <CardItem>
        <Body />
        <Right>
          <Text>Forgot Password?</Text>
        </Right>
      </CardItem>
      <CardItem footer>
        <Left />
        <Body style={{ alignItems: 'center' }}>
          <Button rounded block onPress={onPressedLoginButton} disabled={isLoading}>
            <Text>Login</Text>
          </Button>
        </Body>
        <Right />
      </CardItem>
    </Card>
  )
}

LoginCard.propTypes = {
  style: ViewPropTypes.style,
}
