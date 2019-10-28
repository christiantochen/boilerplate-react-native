import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeView from './view';
import DrawerMenu from '../../components/DrawerMenu';

class HomeContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: <DrawerMenu />
  });

  constructor(props) {
    super(props);
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
