import { StyleSheet } from 'react-native';
import {
    LOGO_SIZE,
    ACCENT_COLOR,
    TEXT_COLOR_WHITE
} from 'app/fixtures/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ACCENT_COLOR
    },
    logo: LOGO_SIZE,
    title: {
        color: TEXT_COLOR_WHITE,
        fontSize: 24,
        textTransform: 'uppercase'
    },
});

export default styles;
