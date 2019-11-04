import React, { Component } from 'react'
import { Text, Card, CardItem, Icon, Label, Picker, Textarea, ActionSheet, Button } from 'native-base'
import { View, ScrollView, Image, Alert, Modal } from 'react-native'
import { ACCENT_COLOR } from '../../fixtures/styles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ImageViewer from 'react-native-image-zoom-viewer'
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
      modalPhotosShow: false,
      modalPhotosShowIndex: 0,
    }

    this.onExcavatorChange = this.onExcavatorChange.bind(this)
    this.handleIsGood = this.handleIsGood.bind(this)
    this.handleNoActivity = this.handleNoActivity.bind(this)
    this.handlePhotos = this.handlePhotos.bind(this)
    this.handlePhotosModal = this.handlePhotosModal.bind(this)
  }

  hideWhenNoActivity() {
    return { display: this.state.noActivity ? 'none' : 'flex' }
  }

  handlePhotosModal(index) {
    this.setState({ modalPhotosShow: true, modalPhotosShowIndex: index })
  }

  handlePhotos() {
    var self = this
    const { photosBase64 } = this.state

    ActionSheet.show(ACTION_SHEET_OPTIONS, async function(index) {
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

      self.setState({ photosBase64 })
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
          {this.Pit({ ...styles.borderTopRadius, ...styles.borderBottomDivider, height: 44 })}
          {this.Activity({
            ...(this.state.noActivity ? styles.borderBottomRadius : styles.borderBottomDivider),
            height: 44,
          })}
          {this.Excavator({ ...styles.borderBottomDivider, ...this.hideWhenNoActivity(), height: 44 })}
          {this.ExcavatorCondition({ ...styles.borderBottomRadius, ...this.hideWhenNoActivity(), height: 44 })}
        </Card>
        {this.Photos({ marginTop: 16 })}
        {this.PhotosModal()}
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

  PhotosModal() {
    return (
      <Modal key="photosModal" visible={this.state.modalPhotosShow} transparent={true}>
        <Button style={{ backgroundColor: ACCENT_COLOR }} onPress={() => this.setState({ modalPhotosShow: false })}>
          <Text style={{ flex: 1, textAlign: 'right' }}>Back</Text>
        </Button>
        <ImageViewer
          enablePreload={true}
          imageUrls={this.state.photosBase64.map((photoBase64) => ({ url: photoBase64 }))}
          saveToLocalByLongPress={false}
          index={this.state.modalPhotosShowIndex}
        />
      </Modal>
    )
  }

  Photos(style) {
    return (
      <View style={style}>
        <Label style={styles.label}>Photos</Label>
        <View style={styles.photoItemContainer}>
          <TouchableHighlight
            style={{ ...styles.borderRadius, ...styles.photoItem, ...styles.photoItemButton }}
            underlayColor="#AFAFB9"
            onPress={this.handlePhotos}
          >
            <Icon type="MaterialIcons" name="add-a-photo" style={{ color: ACCENT_COLOR }} />
          </TouchableHighlight>

          {this.state.photosBase64.map((photo, index) => (
            <TouchableHighlight
              style={{ ...styles.photoItem, ...styles.borderRadius }}
              onPress={() => this.handlePhotosModal(index)}
              onLongPress={() =>
                Alert.alert('Delete Photo', 'Confirm Delete photo ?', [
                  { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                  {
                    text: 'OK',
                    onPress: () => {
                      const { photosBase64 } = this.state
                      photosBase64.splice(index, 1)
                      this.setState({ photosBase64 })
                    },
                  },
                ])
              }
              delayLongPress={500}
            >
              <Image source={{ uri: photo }} style={{ ...styles.borderRadius, ...styles.photoItemImage }} />
            </TouchableHighlight>
          ))}
        </View>
      </View>
    )
  }

  ExcavatorCondition(style) {
    return (
      <CardItem key="excavatorCondition" style={style}>
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
      <CardItem key="excavator" style={style}>
        <Label style={styles.labelInCard}>Excavator</Label>
        <View style={styles.dropdownPickerContainer}>
          <Picker
            mode="dropdown"
            style={styles.dropdownPicker}
            selectedValue={this.state.excavatorId}
            onValueChange={this.onExcavatorChange}
          >
            {this.props.excavators
              .filter((excavator) => excavator.purpose === 'COAL_WINNING')
              .map((excavator) => (
                <Picker.Item key={excavator.id} label={excavator.name} value={excavator.id} />
              ))}
          </Picker>
        </View>
      </CardItem>
    )
  }

  Pit(style) {
    return (
      <CardItem key="pit" style={style}>
        <Label style={styles.labelInCard}>Pit</Label>
        <Text style={{ fontSize: 14, textAlignVertical: 'center' }}>{this.props.selectedPit.name}</Text>
      </CardItem>
    )
  }

  Activity(style) {
    return (
      <CardItem key="activity" style={style}>
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
