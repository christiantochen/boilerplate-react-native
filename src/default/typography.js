import { Input, Label, Text } from 'native-base'
import React from 'react'

import { fontFamily } from '../fixtures/theme'

export const typography = () => {
  const oldTextRender = Text.render
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [{ fontFamily: fontFamily, fontSize: 14 }, origin.props.style],
    })
  }

  const oldInputRender = Input.render
  Input.render = function (...args) {
    const origin = oldInputRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [{ fontFamily: fontFamily, fontSize: 14 }, origin.props.style],
    })
  }

  const oldLabelRender = Label.render
  Label.render = function (...args) {
    const origin = oldLabelRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [{ fontFamily: fontFamily, fontSize: 14 }, origin.props.style],
    })
  }
}
