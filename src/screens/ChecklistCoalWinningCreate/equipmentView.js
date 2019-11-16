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
  cropping: true,
}

const GALLERY_OPTIONS = {
  multiple: true,
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

    const { coalWinning } = props

    this.state = {
      coalWinning,
      modalPhotosShow: false,
      modalPhotosShowIndex: 0,
    }

    this.handleExcavatorChange = this.handleExcavatorChange.bind(this)
    this.handleIsGood = this.handleIsGood.bind(this)
    this.handleNoActivity = this.handleNoActivity.bind(this)
    this.handlePhotos = this.handlePhotos.bind(this)
    this.handlePhotosModal = this.handlePhotosModal.bind(this)
    this.handleRemarks = this.handleRemarks.bind(this)
  }

  handlePhotosModal(index) {
    this.setState({ modalPhotosShow: true, modalPhotosShowIndex: index })
  }

  handlePhotos() {
    var self = this
    const { coalWinning } = this.state

    ActionSheet.show(ACTION_SHEET_OPTIONS, async function(index) {
      switch (index) {
        case CAMERA_INDEX:
          await ImagePicker.openCamera(CAMERA_OPTIONS)
            .then((image) => coalWinning.photosBase64.push(image.path))
            .catch((err) => console.log(err))
          break
        case GALLERY_INDEX:
          await ImagePicker.openPicker(GALLERY_OPTIONS)
            .then((images) => images.forEach((image) => coalWinning.photosBase64.push(image.path)))
            .catch((err) => console.log(err))
          break
        default:
          break
      }

      self.setState({ coalWinning })
    })
  }

  handleRemarks(remarks) {
    const { coalWinning } = this.state
    coalWinning.remarks = remarks
    this.setState({ coalWinning })
  }

  handleNoActivity(noActivity) {
    const { coalWinning } = this.state
    coalWinning.noActivity = noActivity
    this.setState({ coalWinning })
  }

  handleIsGood(isGood) {
    const { coalWinning } = this.state
    coalWinning.isGood = isGood
    this.setState({ coalWinning })
  }

  handleExcavatorChange(excavatorId) {
    const { coalWinning } = this.state
    coalWinning.excavatorId = excavatorId
    this.setState({ coalWinning })
  }

  render() {
    const { noActivity } = this.state.coalWinning

    return (
      <ScrollView key="equipmentView" style={{ padding: 16 }}>
        <Card key="equipmentView_mainCard" style={{ ...styles.borderRadius }}>
          {this.Pit({ ...styles.borderTopRadius, ...styles.borderBottomDivider, height: 44 })}
          {this.Activity({
            ...(noActivity ? styles.borderBottomRadius : styles.borderBottomDivider),
            height: 44,
          })}
          {!noActivity && this.Excavator({ ...styles.borderBottomDivider, height: 44 })}
          {!noActivity && this.ExcavatorCondition({ ...styles.borderBottomRadius, height: 44 })}
        </Card>
        {this.Photos({ marginTop: 16 })}
        {this.PhotosModal()}
        {this.Remarks({ marginTop: 16 })}
      </ScrollView>
    )
  }

  Remarks(style) {
    const { remarks } = this.state.coalWinning

    return (
      <View key="equipmentView_Remarks" style={style}>
        <Label style={styles.label}>Remarks</Label>
        <Textarea
          rowSpan={5}
          bordered
          style={{ ...styles.textArea, ...styles.borderRadius }}
          value={remarks}
          onChangeText={this.handleRemarks}
        />
      </View>
    )
  }

  PhotosModal() {
    const { photosBase64 } = this.state.coalWinning

    return (
      <Modal key="equipmentView_PhotosModal" visible={this.state.modalPhotosShow} transparent={true}>
        <Button style={{ backgroundColor: ACCENT_COLOR }} onPress={() => this.setState({ modalPhotosShow: false })}>
          <Text style={{ flex: 1, textAlign: 'right' }}>Back</Text>
        </Button>
        <ImageViewer
          enablePreload={true}
          imageUrls={photosBase64.map((photoBase64) => ({ url: photoBase64 }))}
          saveToLocalByLongPress={false}
          index={this.state.modalPhotosShowIndex}
        />
      </Modal>
    )
  }

  Photos(style) {
    const { photosBase64 } = this.state.coalWinning

    return (
      <View key="equipmentView_Photos" style={style}>
        <Label style={styles.label}>Photos</Label>
        <View style={styles.photoItemContainer}>
          <TouchableHighlight
            key="equipmentView_add_a_photo"
            style={{ ...styles.photoItem, ...styles.photoItemButton }}
            underlayColor="#AFAFB9"
            onPress={this.handlePhotos}
          >
            <Icon type="MaterialIcons" name="add-a-photo" style={{ color: ACCENT_COLOR }} />
          </TouchableHighlight>

          {photosBase64.map((photoBase64, index) => (
            <TouchableHighlight
              key={index}
              style={styles.photoItem}
              onPress={() => this.handlePhotosModal(index)}
              onLongPress={() =>
                Alert.alert('Delete Photo', 'Confirm Delete photo ?', [
                  { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                  {
                    text: 'OK',
                    onPress: () => {
                      const { coalWinning } = this.state
                      coalWinning.photosBase64.splice(index, 1)
                      this.setState({ coalWinning })
                    },
                  },
                ])
              }
              delayLongPress={500}
            >
              <Image source={{ uri: photoBase64 }} style={styles.photoItemImage} />
            </TouchableHighlight>
          ))}
        </View>
      </View>
    )
  }

  ExcavatorCondition(style) {
    const { isGood } = this.state.coalWinning

    return (
      <CardItem key="excavatorCondition" style={style}>
        <Label style={styles.labelInCard}>Is the excavator in good condition ?</Label>
        <Icon
          {...CLEAR_ICON}
          style={{ ...styles.icon, color: isGood ? '#AFAFB9' : 'red' }}
          onPress={() => this.handleIsGood(false)}
        />
        <Icon
          {...CHECK_ICON}
          style={{ ...styles.icon, ...styles.checkIcon, color: isGood ? 'green' : '#AFAFB9' }}
          onPress={() => this.handleIsGood(true)}
        />
      </CardItem>
    )
  }

  Excavator(style) {
    const { excavatorId } = this.state.coalWinning

    return (
      <CardItem key="equipmentView_Excavator" style={style}>
        <Label style={styles.labelInCard}>Excavator</Label>
        <View style={styles.pickerContainer}>
          <Picker
            mode="dropdown"
            style={styles.picker}
            selectedValue={excavatorId}
            onValueChange={this.handleExcavatorChange}
          >
            {this.props.excavators.map((excavator) => {
              return <Picker.Item key={excavator.id} label={excavator.name} value={excavator.id} />
            })}
          </Picker>
        </View>
      </CardItem>
    )
  }

  Pit(style) {
    return (
      <CardItem key="equipmentView_Pit" style={style}>
        <Label style={styles.labelInCard}>Pit</Label>
        <Text style={{ fontSize: 14, textAlignVertical: 'center' }}>{this.props.selectedPit.name}</Text>
      </CardItem>
    )
  }

  Activity(style) {
    const { noActivity } = this.state.coalWinning

    return (
      <CardItem key="equipmentView_Activity" style={style}>
        <Label style={styles.labelInCard}>Any Coal Winning Activity?</Label>
        <Icon
          {...CLEAR_ICON}
          style={{ ...styles.icon, color: noActivity ? 'red' : '#AFAFB9' }}
          onPress={() => this.handleNoActivity(true)}
        />
        <Icon
          {...CHECK_ICON}
          style={{ ...styles.icon, ...styles.checkIcon, color: noActivity ? '#AFAFB9' : 'green' }}
          onPress={() => this.handleNoActivity(false)}
        />
      </CardItem>
    )
  }
}

export default EquipmentView
