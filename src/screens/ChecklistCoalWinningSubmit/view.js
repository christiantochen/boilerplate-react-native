import React, { Component } from 'react'
import { Text, Button, Card, CardItem, Icon, Input } from 'native-base'
import { View, Modal } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import { ScrollView } from 'react-native-gesture-handler'
import { ACCENT_COLOR } from '../../fixtures/styles'
import SignatureCapture from 'react-native-signature-capture'
import styles from './styles'

class ChecklistCoalWinningSubmitView extends Component {
  constructor(props) {
    super(props)

    const { checklist } = props.navigation.state.params

    this.state = {
      coalWinning: checklist,
      modalSignatureShow: false,
    }

    this.handleContractorPIC = this.handleContractorPIC.bind(this)
    this.handleShowSignatureModal = this.handleShowSignatureModal.bind(this)
    this.handleSignatureModalSubmit = this.handleSignatureModalSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSignatureCapture = this.handleSignatureCapture.bind(this)
  }

  handleEdit() {
    NavigationService.navigate('ChecklistCoalWinningCreate', { checklist: this.state.coalWinning })
  }

  handleContractorPIC(pic) {
    const { coalWinning } = this.state
    coalWinning.contractorPIC = pic
    this.setState({ coalWinning })
  }

  handleShowSignatureModal() {
    this.setState({ modalSignatureShow: !this.state.modalSignatureShow })
  }

  async handleSignatureModalSubmit() {
    this.refs['signature'].saveImage()
  }

  handleSignatureCapture(result) {
    const { coalWinning } = this.state
    coalWinning.signatureBase64 = result.encoded
    console.log(coalWinning)
    this.setState({ coalWinning, modalSignatureShow: false })
  }

  renderSignatureModal() {
    return (
      <Modal transparent={true} visible={this.state.modalSignatureShow}>
        <View style={styles.signatureModalContainer}>
          <View style={styles.signatureModalInnerContainer}>
            <Text>Contractor signature</Text>
            <Input
              style={styles.contractorPICInput}
              value={this.state.coalWinning.contractorPIC}
              onChangeText={this.handleContractorPIC}
            />
            <View style={styles.signatureContainer}>
              <SignatureCapture
                ref="signature"
                saveImageFileInExtStorage={false}
                showNativeButtons={false}
                showTitleLabel={false}
                style={{ flex: 1 }}
                onSaveEvent={this.handleSignatureCapture}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button style={styles.signatureModalButton} onPress={this.handleShowSignatureModal}>
                <Text style={styles.signatureModalButtonText}>Back</Text>
              </Button>
              <Button style={styles.signatureModalButton} onPress={this.handleSignatureModalSubmit}>
                <Text style={[styles.signatureModalButtonText, { textAlign: 'right' }]}>Submit</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F0F5FF' }}>
        <View
          style={{ padding: 16, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', elevation: 5 }}
        >
          <Text style={{ flex: 1 }}>{this.state.coalWinning.title}</Text>
          <Button transparent style={{ height: 50, marginVertical: -16 }} onPress={this.handleEdit}>
            <Text>Edit</Text>
          </Button>
        </View>
        <ScrollView style={{ padding: 16 }}>
          <Text style={{ color: '#232323', fontSize: 14 }}>
            There are deviations. Contractor signature is required.
          </Text>
          <Card style={{ marginTop: 16, borderRadius: 12 }}>
            <CardItem style={{ borderRadius: 12 }}>
              <Text style={{ flex: 1 }}>High ash collected - within 15m</Text>
              <Icon type="MaterialIcons" name="clear" style={{ fontSize: 24, color: 'red' }} />
            </CardItem>
          </Card>
        </ScrollView>
        <Button
          style={{ borderRadius: 0, backgroundColor: ACCENT_COLOR, elevation: 5 }}
          onPress={this.handleShowSignatureModal}
        >
          <Text style={{ flex: 1, color: 'white', textAlign: 'center' }}>Contractor sign and submit</Text>
        </Button>
        {this.renderSignatureModal()}
      </View>
    )
  }
}

export default ChecklistCoalWinningSubmitView
