import { StyleSheet } from 'react-native'
import { ACCENT_COLOR, BACKGROUND_COLOR_WHITE } from '../../fixtures/styles'

const borderRadius = 8
const grayColor = '#AFAFB9'

const styles = StyleSheet.create({
  borderRadius: { borderRadius },
  borderTopRadius: {
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  borderBottomRadius: {
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  borderBottomDivider: {
    borderBottomWidth: 1,
    borderBottomColor: grayColor,
  },
  icon: { width: 24, height: 25 },
  //
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: BACKGROUND_COLOR_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerLine: {
    backgroundColor: ACCENT_COLOR,
    height: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    left: 60,
    right: 60,
  },
  headerLabel: {
    fontSize: 10,
    color: ACCENT_COLOR,
    position: 'absolute',
  },
  headerIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderColor: ACCENT_COLOR,
    borderWidth: 1,
  },
  headerIconContainer: {
    marginHorizontal: 32,
    marginVertical: 16,
    borderRadius: 32,
  },
  //
  checkIcon: {
    marginLeft: 12,
  },
  excavatorPicker: {
    height: 24,
    marginTop: 3,
    marginRight: -22,
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  label: { fontSize: 12, color: grayColor },
  labelInCard: { flex: 1, fontSize: 14, color: grayColor },
  remarksArea: {
    backgroundColor: 'white',
    borderColor: grayColor,
  },
  photoItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photoItem: {
    marginTop: 4,
    marginRight: 4,
    borderColor: ACCENT_COLOR,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  photoItemImage: {
    width: 62,
    height: 46,
  },
  photoItemButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})

export default styles
