import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View
} from 'react-native'
import {
    TouchableOpacity
} from 'react-native-gesture-handler';
import {
    Drawer
} from 'native-base'
import HomeView from './HomeView';
import Styles from './styles';
import HamburgerMenu from 'app/components/HamburgerMenu'
import DrawerMenu from 'app/components/DrawerMenu'

class HomeContainer extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);

        this.state = {
            drawer: undefined
        };
    }

    render() {
        return <HomeView {...this.props} />
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
