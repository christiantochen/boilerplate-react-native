import React, { Component } from 'react'
import { Text, Card, CardItem, Button, Icon, Toast } from 'native-base'
import { View, ScrollView, RefreshControl } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'

class ChecklistView extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  renderChecklistCardItemWithButton(item) {
    return (
      <CardItem
        key={item.id}
        style={{
          flexDirection: 'row',
          marginTop: 12,
          marginHorizontal: 12,
          borderRadius: 12,
          backgroundColor: '#F3F3F3',
        }}
      >
        <Text style={{ flex: 1 }}>{item.title}</Text>
        <Button transparent style={{ borderLeftWidth: 1, borderColor: '#AFAFB9', height: 20 }}>
          <Text style={{ color: '#AFAFB9', paddingHorizontal: 16, textTransform: 'capitalize' }}>
            Edit
          </Text>
        </Button>
        <Button transparent style={{ borderLeftWidth: 1, borderColor: '#AFAFB9', height: 20 }}>
          <Text
            style={{
              color: '#AFAFB9',
              paddingLeft: 16,
              paddingRight: 0,
              textTransform: 'capitalize',
            }}
          >
            Submit
          </Text>
        </Button>
      </CardItem>
    )
  }

  renderChecklistCardItem(item) {
    return (
      <CardItem
        key={item.id}
        style={{
          flexDirection: 'row',
          marginTop: 12,
          marginHorizontal: 12,
          borderRadius: 12,
          backgroundColor: '#F3F3F3',
        }}
      >
        <Text style={{ flex: 1 }}>{item.title}</Text>
        <Text style={{ marginRight: 24, textAlign: 'right', color: '#AFAFB9' }}>
          {item.shiftTimestamp}
        </Text>
        <Text style={{ textAlign: 'right', color: '#44D7B6' }}>Submitted</Text>
      </CardItem>
    )
  }

  renderChecklistCard(checklistLabel, checklistItems) {
    return (
      <Card style={{ marginTop: 16, borderRadius: 12, paddingBottom: 12 }}>
        <CardItem
          key={checklistLabel}
          style={{
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            backgroundColor: '#D8D8D8',
          }}
        >
          <Text style={{ flex: 1 }}>{checklistLabel}</Text>
          <Button rounded small style={{ backgroundColor: 'white' }}>
            <Icon
              type="MaterialIcons"
              name="add"
              style={{
                fontSize: 24,
                color: ACCENT_COLOR,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 2,
                marginBottom: 2,
              }}
              onPress={() =>
                Toast.show({
                  text: 'Still in Development',
                  buttonText: 'Okay',
                })
              }
            />
          </Button>
        </CardItem>
        {checklistItems && checklistItems.length ? (
          checklistItems.map((checklistItem) =>
            checklistItem.shiftTimestamp
              ? this.renderChecklistCardItem(checklistItem)
              : this.renderChecklistCardItemWithButton(checklistItem)
          )
        ) : (
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              paddingTop: 20,
              paddingBottom: 8,
              color: '#FF7300',
            }}
          >
            No checklists completed yet
          </Text>
        )}
      </Card>
    )
  }

  render() {
    return (
      <ScrollView
        style={{ padding: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={this.props.checklist.isLoading}
            onRefresh={this.props.fetchChecklist}
          />
        }
      >
        <Text style={{ fontSize: 14, opacity: 0.5, marginBottom: 4 }}>Daily</Text>
        {this.renderChecklistCard('Coal Winning', this.props.checklistPerPit.COAL_WINNING)}
        {this.renderChecklistCard('OB Removal', this.props.checklistPerPit.OB_REMOVAL)}
        {this.renderChecklistCard('Dumping Point', this.props.checklistPerPit.DUMPING)}
        {this.renderChecklistCard('Blasting Activity', this.props.checklistPerPit.BLASTING)}
        {this.renderChecklistCard(
          'Support Equipment',
          this.props.checklistPerPit.SUPPORT_EQUIPMENT
        )}
        {this.renderChecklistCard('Rain and Slippery', this.props.checklistPerPit.RAINFALL)}
        <View height={32} />
      </ScrollView>
    )
  }
}

export default ChecklistView
