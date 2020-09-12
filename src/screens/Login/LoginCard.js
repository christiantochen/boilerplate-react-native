import { Button, Form, Input, Label, Text } from 'native-base'
import React, { useState } from 'react'
import { TouchableNativeFeedback, View, ViewPropTypes } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AUTH_ACTION_LOGIN } from '../../redux/actions'
import { FormItem, FormWrapper } from './styles'

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
    <FormWrapper style={style}>
      <Form>
        <FormItem stackedLabel error={error.username} last>
          <Label>Username</Label>
          <Input autoCapitalize="none" value={form.username} onChangeText={handleOnChangeText.bind(this, 'username')} />
        </FormItem>
        <FormItem stackedLabel error={error.password} last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            value={form.password}
            onChangeText={handleOnChangeText.bind(this, 'password')}
          />
        </FormItem>
        <TouchableNativeFeedback useForeground={true}>
          <Text style={{ alignSelf: 'flex-end' }}>Forgot Password?</Text>
        </TouchableNativeFeedback>
      </Form>
      <View style={{ flex: 1 }} />
      <Button block onPress={onPressedLoginButton} disabled={isLoading}>
        <Text>Login</Text>
      </Button>
    </FormWrapper>
  )
}

LoginCard.propTypes = {
  style: ViewPropTypes.style,
}
