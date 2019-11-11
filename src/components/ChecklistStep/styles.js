import { StyleSheet } from 'react-native'

const primaryColor = '#463291'
const marginHorizontal = 32
const marginVertical = 16
const iconSize = 28

const applyShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    height: 60,
    ...applyShadow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  lineStyle: {
    height: 1,
    backgroundColor: primaryColor,
    position: 'absolute',
    left: marginHorizontal + iconSize / 2,
    right: marginHorizontal + iconSize / 2,
  },
  stepContainerStyle: { justifyContent: 'center', alignItems: 'center' },
  stepTitleStyle: { position: 'absolute', top: iconSize + marginVertical, fontSize: 10, color: primaryColor },
  stepIconContainerStyle: { marginHorizontal, marginVertical, borderRadius: iconSize },
  stepIconStyle: {
    width: iconSize,
    height: iconSize,
    borderWidth: 1,
    borderRadius: iconSize / 2,
    borderColor: primaryColor,
    borderRadius: iconSize,
    backgroundColor: primaryColor,
  },
})

export default styles
