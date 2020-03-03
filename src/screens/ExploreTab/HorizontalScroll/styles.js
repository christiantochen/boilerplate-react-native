import styled from 'styled-components'
import { Textarea as NBTextarea } from 'native-base'
import {
  TouchableOpacity as GestureHandlerTouchableOpacity,
  TouchableHighlight as GestureHandlerTouchableHighlight,
} from 'react-native-gesture-handler'

export const Wrapper = styled.View``

export const Header = styled.Text`
  font-size: 16px;
  color: white;
  margin-left: 16px;
`

export const Card = styled(GestureHandlerTouchableOpacity)`
  border-radius: 4px;
  margin-left: ${(props) => (props.first ? '16px' : '4px')};
  margin-right: ${(props) => (props.last ? '8px' : '4px')};
  width: 142px;
`

export const CardInfo = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const Title = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  height: 46px; /* font-size * 1.5 * number of lines + padding  */
  font-size: 14px;
  padding: 4px;
  color: white;
`

export const Image = styled.Image`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const Author = styled.Text.attrs({ numberOfLines: 1, ellipsizeMode: 'tail' })`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  padding: 4px;
`
