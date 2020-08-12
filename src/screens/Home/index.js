import {
  Body,
  Button,
  Image,
  Left,
  Header as NBHeader,
  Icon as NBIcon,
  Right,
  Subtitle,
  Text,
  Title,
  View,
} from 'native-base'
import React from 'react'
import { Pressable, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styled from 'styled-components'

import ProfileCard from './ProfileCard'
import { Wrapper } from './styles'

const Header = styled(NBHeader)`
  background-color: ${({ theme }) => theme.color.accent};
`

const IconMenu = styled(NBIcon).attrs({
  name: 'menu',
})`
  font-size: 32px;
  color: white;
`

const IconNotification = styled(NBIcon).attrs({
  name: 'ios-notifications',
})`
  color: white;
`

export default function Home(props) {
  function onPressedMenuButton() {
    props.navigation.toggleDrawer()
  }

  return (
    <Wrapper>
      <Header noShadow>
        <StatusBar backgroundColor="#463291" />
        <Left style={{ marginLeft: 8 }}>
          <Pressable onPress={onPressedMenuButton}>
            <IconMenu />
          </Pressable>
        </Left>
        <Right style={{ marginRight: 8 }}>
          <Pressable>
            <IconNotification />
          </Pressable>
        </Right>
      </Header>
      <ScrollView>
        <ProfileCard accent />
        <View style={{ height: 1000 }} />
      </ScrollView>
    </Wrapper>
  )
}
