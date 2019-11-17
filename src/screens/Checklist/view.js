import React, { Component } from 'react'
import { Text, Card, CardItem, Button, Icon } from 'native-base'
import { View, ScrollView, RefreshControl } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import styles from './styles'

class ChecklistView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView
        style={{ padding: 16 }}
        refreshControl={
          <RefreshControl refreshing={this.props.checklist.isLoading} onRefresh={this.props.fetchChecklist} />
        }
      >
        {this.renderChecklistCard('Coal Winning', this.props.checklistPerPit.COAL_WINNING)}
        {this.renderChecklistCard('OB Removal', this.props.checklistPerPit.OB_REMOVAL)}
        {this.renderChecklistCard('Dumping Point', this.props.checklistPerPit.DUMPING)}
        {this.renderChecklistCard('Blasting Activity', this.props.checklistPerPit.BLASTING)}
        {this.renderChecklistCard('Support Equipment', this.props.checklistPerPit.SUPPORT_EQUIPMENT)}
        {this.renderChecklistCard('Rain and Slippery', this.props.checklistPerPit.RAINFALL)}
        <View height={24} />
      </ScrollView>
    )
  }

  handleCreateEditButton(checklistLabel, checklist = undefined) {
    switch (checklistLabel) {
      case 'Coal Winning':
        NavigationService.navigate('ChecklistCoalWinningCreate', { checklist })
        break
      case 'OB Removal':
      case 'Dumping Point':
      case 'Blasting Activity':
      case 'Support Equipment':
      case 'Rain and Slippery':
      default:
        break
    }
  }

  handleSubmitButton(checklistLabel, checklist) {
    switch (checklistLabel) {
      case 'Coal Winning':
        NavigationService.navigate('ChecklistCoalWinningSubmit', { checklist })
        break
      case 'OB Removal':
      case 'Dumping Point':
      case 'Blasting Activity':
      case 'Support Equipment':
      case 'Rain and Slippery':
      default:
        break
    }
  }

  renderChecklistCardItemWithButton(checklistLabel, checklist) {
    return (
      <CardItem key={checklist.id} style={styles.cardItemStyle}>
        <Text style={styles.cardItemTitleStyle}>{checklist.title}</Text>
        <Button
          transparent
          style={styles.cardItemButtonStyle}
          onPress={() => this.handleCreateEditButton(checklistLabel, checklist)}
        >
          <Text style={styles.cardItemButtonTextStyle}>Edit</Text>
        </Button>
        <Button
          transparent
          style={styles.cardItemButtonStyle}
          onPress={() => this.handleSubmitButton(checklistLabel, checklist)}
        >
          <Text style={{ ...styles.cardItemButtonTextStyle, paddingRight: 0 }}>Submit</Text>
        </Button>
      </CardItem>
    )
  }

  renderChecklistCardItem(checklistLabel, checklist) {
    return (
      <CardItem key={checklist.id} style={styles.cardItemStyle}>
        <Text style={styles.cardItemTitleStyle}>{checklist.title}</Text>
        <Text style={styles.cardItemSubTitleStyle}>{checklist.shiftTimestamp}</Text>
        <Text style={{ textAlign: 'right', color: '#44D7B6' }}>Submitted</Text>
      </CardItem>
    )
  }

  renderChecklistCard(checklistLabel, checklistItems) {
    return (
      <Card key={checklistLabel} style={styles.cardStyle}>
        <CardItem key={`header${checklistLabel}`} style={styles.cardHeaderStyle}>
          <Text style={{ flex: 1 }}>{checklistLabel}</Text>
          <Button
            rounded
            small
            style={styles.cardHeaderButtonStyle}
            onPress={() => this.handleCreateEditButton(checklistLabel)}
          >
            <Icon type="MaterialIcons" name="add" style={styles.cardHeaderButtonIconStyle} />
          </Button>
        </CardItem>
        {checklistItems && checklistItems.length ? (
          checklistItems.map((checklistItem) =>
            checklistItem.shiftTimestamp
              ? this.renderChecklistCardItem(checklistLabel, checklistItem)
              : this.renderChecklistCardItemWithButton(checklistLabel, checklistItem)
          )
        ) : (
          <Text style={styles.noChecklistLabel}>No checklists completed yet</Text>
        )}
      </Card>
    )
  }
}

export default ChecklistView
