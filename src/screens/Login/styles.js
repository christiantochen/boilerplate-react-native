import { StyleSheet } from 'react-native'
import {
  RESET_STYLE,
  ACCENT_COLOR,
  BACKGROUND_COLOR,
  TEXT_COLOR_WHITE,
  BORDER_RADIUS,
  LOGO_SIZE,
} from '../../fixtures/styles'
import { BACKGROUND_COLOR_WHITE } from '../../fixtures/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ACCENT_COLOR,
  },
  headerLogo: LOGO_SIZE,
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  content: {
    flex: 6,
    padding: 16,
    backgroundColor: BACKGROUND_COLOR,
  },
  textInputContainer: {
    ...RESET_STYLE,
    backgroundColor: BACKGROUND_COLOR_WHITE,
    borderRadius: BORDER_RADIUS,
  },
  textInputInnerContainer: {
    ...RESET_STYLE,
    borderBottomWidth: 0,
  },
  textInputIcon: {
    ...RESET_STYLE,
    marginLeft: 16,
    marginRight: 8,
  },
  textInputLabel: {
    ...RESET_STYLE,
    fontSize: 16,
    color: ACCENT_COLOR,
  },
  submitButton: {
    padding: 12,
    marginTop: 28,
    backgroundColor: ACCENT_COLOR,
  },
  submitButtonText: {
    fontSize: 16,
    color: TEXT_COLOR_WHITE,
    textAlign: 'center',
  },
  fingerprintButton: {
    padding: 12,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    borderColor: ACCENT_COLOR,
    backgroundColor: BACKGROUND_COLOR,
  },
  fingerprintButtonIcon: {
    color: ACCENT_COLOR,
  },
  fingerprintButtonText: {
    fontSize: 14,
    color: ACCENT_COLOR,
    textAlign: 'center',
  },
})

export default styles
