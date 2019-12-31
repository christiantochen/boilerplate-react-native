import { StyleSheet } from 'react-native'
import { ACCENT_COLOR, BACKGROUND_COLOR_WHITE } from '../../fixtures/styles'

const borderRadius = 8
const grayColor = '#AFAFB9'
const cardItemHeight = 44

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
  borderTopDivider: {
    borderTopWidth: 1,
    borderTopColor: grayColor,
  },
  borderBottomDivider: {
    borderBottomWidth: 1,
    borderBottomColor: grayColor,
  },
  icon: { fontSize: 24 },
  //
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
  checkIcon: {
    marginLeft: 12,
  },
  pickerContainer: {
    width: 125,
  },
  picker: {
    height: 24,
    marginTop: 0,
    marginRight: -22,
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  input: {
    flex: 0,
    fontSize: 14,
    padding: 0,
    height: 24,
    textAlign: 'right',
    borderBottomColor: '#AFAFB9',
    borderBottomWidth: 1,
  },
  label: { fontSize: 12, color: grayColor },
  labelInCard: { flex: 1, fontSize: 14, color: grayColor },
  locationDetailButton: { height: 40, borderColor: ACCENT_COLOR },
  locationDetailButtonIcon: { fontSize: 18, marginLeft: 8, marginRight: 6, color: ACCENT_COLOR },
  locationDetailButtonText: { paddingLeft: 0, paddingRight: 8, fontSize: 12, color: ACCENT_COLOR },
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
    borderRadius,
  },
  photoItemImage: {
    width: 62,
    height: 46,
    borderRadius,
  },
  photoItemButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textArea: {
    fontSize: 14,
    backgroundColor: 'white',
    borderColor: grayColor,
    margin: 0,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 4,
  },
})

export default styles
