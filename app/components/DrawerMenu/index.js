import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    Image,
    Text
} from 'react-native';
import {
    Icon
} from 'native-base'
import PropTypes from 'prop-types';
import Styles from './styles';

class DrawerMenu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <Text>Drawer Menu</Text>
            </View>
        )
    }
}

DrawerMenu.propTypes = {
    style: PropTypes.object
};

export default DrawerMenu;