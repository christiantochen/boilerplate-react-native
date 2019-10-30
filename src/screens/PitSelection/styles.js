import { StyleSheet } from 'react-native'
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_WHITE,
  BORDER_COLOR_GRAY,
  TEXT_COLOR,
  TEXT_COLOR_ACCENT,
  TEXT_COLOR_GRAY,
  RESET_STYLE,
} from 'app/fixtures/styles'
import { ACCENT_COLOR } from '../../fixtures/styles'

const styles = StyleSheet.create({
  container: {
    ...RESET_STYLE,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    color: TEXT_COLOR_ACCENT,
    fontSize: 24,
    marginTop: 24,
    textTransform: 'capitalize',
  },
  subTitle: {
    color: TEXT_COLOR,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  contractorContainer: {
    ...RESET_STYLE,
    backgroundColor: BACKGROUND_COLOR_WHITE,
    borderRadius: 12,
    paddingTop: 12,
    paddingBottom: 2,
    paddingLeft: 16,
    paddingRight: 16,
  },
  contractorTitle: {
    ...RESET_STYLE,
    fontSize: 20,
    textTransform: 'uppercase',
    paddingTop: 4,
    paddingBottom: 4,
    color: TEXT_COLOR_GRAY,
    fontWeight: 'bold',
  },
  pitContainer: {
    ...RESET_STYLE,
    borderTopWidth: 1,
    borderColor: BORDER_COLOR_GRAY,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
  },
  pitTitle: {
    ...RESET_STYLE,
    color: TEXT_COLOR,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  pitIcon: {
    ...RESET_STYLE,
    width: 24,
    height: 24,
    margin: 8,
  },
  continueButton: {
    padding: 18,
    backgroundColor: ACCENT_COLOR,
  },
  continueButtonText: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
})

export default styles
