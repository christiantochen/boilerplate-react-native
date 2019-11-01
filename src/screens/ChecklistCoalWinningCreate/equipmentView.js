import React, { Component } from 'react'
import { Text, Card, CardItem, Icon, Label, Picker, Textarea, ActionSheet } from 'native-base'
import { View, ScrollView, Image } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker'
import styles from './styles'

const BUTTONS = [
  { text: 'Take Picture', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: 'Choose From Library', icon: 'analytics', iconColor: '#f42ced' },
  { text: 'Cancel', icon: 'close', iconColor: '#25de5b' },
]

const CAMERA_INDEX = 0
const GALLERY_INDEX = 1
const CANCEL_INDEX = 2

const ACTION_SHEET_OPTIONS = {
  title: 'Choose Image',
  options: BUTTONS,
  cancelButtonIndex: CANCEL_INDEX,
}

const CAMERA_OPTIONS = {
  width: 300,
  height: 400,
  includeBase64: true,
  cropping: true,
}

const GALLERY_OPTIONS = {
  multiple: true,
  includeBase64: true,
}

const CLEAR_ICON = {
  type: 'MaterialIcons',
  name: 'clear',
}

const CHECK_ICON = {
  type: 'MaterialCommunityIcons',
  name: 'check-circle',
}

class EquipmentView extends Component {
  constructor(props) {
    super(props)

    const { excavatorId, isGood, noActivity, remarks, photosBase64 } = props

    this.state = {
      excavatorId,
      isGood,
      noActivity,
      remarks,
      photosBase64,
    }
  }

  hideWhenNoActivity() {
    const display = this.state.noActivity ? 'none' : 'flex'
    return { display }
  }

  handlePhotos() {
    ActionSheet.show(ACTION_SHEET_OPTIONS, async (index) => {
      const { photosBase64 } = this.state
      const base64prefix = 'data:image/png;base64,'

      switch (index) {
        case CAMERA_INDEX:
          await ImagePicker.openCamera(CAMERA_OPTIONS)
            .then((image) => photosBase64.push(`${base64prefix}${image.data}`))
            .catch((err) => console.log(err))
          break
        case GALLERY_INDEX:
          await ImagePicker.openPicker(GALLERY_OPTIONS)
            .then((images) => images.forEach((image) => photosBase64.push(`${base64prefix}${image.data}`)))
            .catch((err) => console.log(err))
          break
        default:
          break
      }

      this.setState({ photosBase64 })
    })
  }

  handleNoActivity(noActivity) {
    this.setState({ noActivity })
  }

  handleIsGood(isGood) {
    this.setState({ isGood })
  }

  onExcavatorChange(excavatorId) {
    this.setState({ excavatorId })
  }

  render() {
    return (
      <ScrollView style={{ padding: 16, display: this.props.show ? 'flex' : 'none' }}>
        <Card style={{ ...styles.borderRadius }}>
          {this.Pit({ ...styles.borderTopRadius, ...styles.borderBottomDivider })}
          {this.Activity(this.state.noActivity ? styles.borderBottomRadius : styles.borderBottomDivider)}
          {this.Excavator({ ...styles.borderBottomDivider, ...this.hideWhenNoActivity() })}
          {this.ExcavatorCondition({ ...styles.borderBottomRadius, ...this.hideWhenNoActivity() })}
        </Card>
        {this.Photos({ marginTop: 16 })}
        {this.Remarks({ marginTop: 16 })}
      </ScrollView>
    )
  }

  Remarks(style) {
    return (
      <View style={style}>
        <Label style={styles.label}>Remarks</Label>
        <Textarea
          rowSpan={5}
          bordered
          style={{ ...styles.remarksArea, ...styles.borderRadius }}
          value={this.state.remarks}
        />
      </View>
    )
  }

  Photos(style) {
    return (
      <View style={style}>
        <Label style={styles.label}>Photos</Label>
        <View style={styles.photoItemContainer}>
          <TouchableHighlight
            style={{
              ...styles.borderRadius,
              ...styles.photoItem,
              ...styles.photoItemButton,
            }}
            underlayColor="#AFAFB9"
            onPress={this.handlePhotos}
          >
            <Icon type="MaterialIcons" name="add-a-photo" style={{ color: ACCENT_COLOR }} />
          </TouchableHighlight>

          {this.state.photosBase64.map((photo) => (
            <Image
              source={{ uri: photo }}
              style={{ ...styles.borderRadius, ...styles.photoItem, ...styles.photoItemImage }}
            />
          ))}
        </View>
      </View>
    )
  }

  ExcavatorCondition(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Is the excavator in good condition ?</Label>
        <Icon
          {...CLEAR_ICON}
          style={{ ...styles.icon, color: this.state.isGood ? '#AFAFB9' : 'red' }}
          onPress={() => this.handleIsGood(false)}
        />
        <Icon
          {...CHECK_ICON}
          style={{ ...styles.icon, ...styles.checkIcon, color: this.state.isGood ? 'green' : '#AFAFB9' }}
          onPress={() => this.handleIsGood(true)}
        />
      </CardItem>
    )
  }

  Excavator(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Excavator</Label>
        <Picker
          mode="dropdown"
          placeholder="Select Excavator"
          style={styles.excavatorPicker}
          selectedValue={this.state.excavatorId}
          onValueChange={this.onExcavatorChange}
        >
          {this.props.excavators
            .filter((excavator) => excavator.purpose === 'COAL_WINNING')
            .map((excavator) => (
              <Picker.Item key={excavator.id} label={excavator.name} value={excavator.id} />
            ))}
        </Picker>
      </CardItem>
    )
  }

  Pit(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Pit</Label>
        <Text style={{ fontSize: 14 }}>{this.props.selectedPit.name}</Text>
      </CardItem>
    )
  }

  Activity(style) {
    return (
      <CardItem style={style}>
        <Label style={styles.labelInCard}>Any Coal Winning Activity?</Label>
        <Icon
          {...CLEAR_ICON}
          style={{ ...styles.icon, color: this.state.noActivity ? 'red' : '#AFAFB9' }}
          onPress={() => this.handleNoActivity(true)}
        />
        <Icon
          {...CHECK_ICON}
          style={{ ...styles.icon, ...styles.checkIcon, color: this.state.noActivity ? '#AFAFB9' : 'green' }}
          onPress={() => this.handleNoActivity(false)}
        />
      </CardItem>
    )
  }
}

export default EquipmentView
