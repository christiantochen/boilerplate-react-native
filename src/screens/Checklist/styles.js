import { StyleSheet } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'

const borderRadius = 12

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    marginBottom: 16,
    borderRadius,
    paddingBottom: 12,
  },
  cardHeaderStyle: {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#D8D8D8',
  },
  cardHeaderButtonStyle: {
    backgroundColor: 'white',
  },
  cardHeaderButtonIconStyle: {
    fontSize: 24,
    color: ACCENT_COLOR,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 2,
    marginBottom: 2,
  },
  cardItemStyle: {
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#F3F3F3',
  },
  cardItemButtonStyle: { borderLeftWidth: 1, borderColor: '#AFAFB9', height: 20, borderRadius: 0 },
  cardItemButtonTextStyle: { color: '#AFAFB9', paddingHorizontal: 16, textTransform: 'capitalize' },
  noChecklistLabel: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 8,
    color: '#FF7300',
  },
})

export default styles
