import { StyleSheet } from 'react-native'
import {
  RESET_STYLE,
  ACCENT_COLOR,
  TEXT_COLOR_WHITE,
  LOGO_SIZE_SMALL,
  BACKGROUND_COLOR_WHITE,
  TEXT_COLOR,
  BORDER_COLOR_GRAY,
} from '../../fixtures/styles'

const styles = StyleSheet.create({
  container: {
    ...RESET_STYLE,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: ACCENT_COLOR,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerLogo: {
    ...RESET_STYLE,
    ...LOGO_SIZE_SMALL,
    marginRight: 12,
  },
  headerTitle: {
    ...RESET_STYLE,
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  profileContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 24,
  },
  profilePicture: {
    ...RESET_STYLE,
    height: 70,
    width: 70,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: BORDER_COLOR_GRAY,
    borderRadius: 70,
  },
  profileName: {
    fontSize: 15,
    color: TEXT_COLOR_WHITE,
    marginBottom: 2,
  },
  profileSub: {
    fontSize: 13,
    opacity: 0.5,
    color: TEXT_COLOR_WHITE,
    marginBottom: 10,
  },
  selectedPitRow: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLOR_WHITE,
  },
  pitName: {
    fontSize: 16,
    color: TEXT_COLOR,
  },
  contractorName: {
    fontSize: 12,
    color: TEXT_COLOR,
    opacity: 0.5,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoutText: {
    color: TEXT_COLOR_WHITE,
    fontSize: 14,
    alignSelf: 'center',
  },
  version: {
    color: TEXT_COLOR_WHITE,
    fontSize: 12,
    textAlign: 'center',
    padding: 8,
    marginTop: 10,
  },
})

export default styles
