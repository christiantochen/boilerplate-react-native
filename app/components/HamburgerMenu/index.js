import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    Image,
} from 'react-native';
import {
    Icon
} from 'native-base'
import PropTypes from 'prop-types';
import Styles from './styles';

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon style={[Styles.icon, this.props.style]} name="menu" size={24} />
            </TouchableOpacity>
        )
    }
}

HamburgerMenu.propTypes = {
    style: PropTypes.object
};

export default HamburgerMenu;