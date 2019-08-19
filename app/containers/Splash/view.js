import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class SplashView extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => this.props.onSplashScreenReady(), 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('app/assets/ic_logo.png')}></Image>
                <Text style={styles.title}>SUPERVISOR APP</Text>
            </View>
        );
    }
}

SplashView.propTypes = {
    onSplashScreenReady: PropTypes.func
};

export default SplashView;
