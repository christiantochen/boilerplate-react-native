import { StyleSheet } from 'react-native'
import { ACCENT_COLOR, BACKGROUND_COLOR_WHITE } from '../../fixtures/styles'

const borderRadius = 8
const grayColor = '#AFAFB9'
const cardItemHeight = 44

const styles = StyleSheet.create({
  signatureModalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  signatureModalInnerContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: '40%',
    padding: 16,
  },
  contractorPICInput: { flex: 0, marginTop: 8, borderWidth: 1, borderColor: '#979797', borderRadius: 12 },
  signatureContainer: {
    flex: 1,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 12,
    padding: 3,
  },
  signatureModalButton: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: ACCENT_COLOR,
    elevation: 5,
    marginHorizontal: -16,
    marginBottom: -16,
  },
  signatureModalButtonText: {
    flex: 1,
    color: 'white',
  },
})

export default styles
