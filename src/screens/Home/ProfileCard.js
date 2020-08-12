import { Subtitle, Title, View } from 'native-base'
import PropTypes from 'prop-types'
import React from 'react'
import { ViewPropTypes } from 'react-native'
import styled from 'styled-components'

const Card = styled.View`
  background-color: ${({ theme, accent }) => (accent ? theme.color.accent : 'transparent')};
  flex-direction: row;
  padding: 12px 24px 24px;
`

const CardItem = styled.View`
  flex: 1;
`

const Image = styled.View`
  background-color: white;
  border-radius: 64px;
  height: 128px;
  width: 128px;
`

export default function ProfileCard({ style, accent }) {
  return (
    <Card style={style} accent={accent}>
      <CardItem>
        <Title>Christianto Chen</Title>
        <Subtitle>Mechanic</Subtitle>
      </CardItem>
      <Image />
    </Card>
  )
}

ProfileCard.propTypes = {
  style: ViewPropTypes.style,
  accent: PropTypes.bool,
}
