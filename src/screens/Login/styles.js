import { StyleSheet } from 'react-native';
import {
    RESET_STYLE,
    ACCENT_COLOR,
    BACKGROUND_COLOR,
    TEXT_COLOR_WHITE,
    BORDER_RADIUS,
    LOGO_SIZE
} from 'app/fixtures/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    header: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ACCENT_COLOR
    },
    headerLogo: LOGO_SIZE,
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        textTransform: 'uppercase'
    },
    content: {
        flex: 6,
        padding: 16,
        backgroundColor: BACKGROUND_COLOR
    },
    textInputContainer: {
        ...RESET_STYLE,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        paddingLeft: 8,
        paddingRight: 8
    },
    textInputIcon: {
        ...RESET_STYLE,
        width: 30,
        height: 30,
        margin: 8,
        tintColor: ACCENT_COLOR
    },
    textInput: {
        ...RESET_STYLE,
        flex: 1,
        fontSize: 16,
        color: ACCENT_COLOR
    },
    buttonOnPressed: {
        borderRadius: BORDER_RADIUS
    },
    submitButton: {
        padding: 12,
        borderRadius: BORDER_RADIUS,
    },
    submitButtonText: {
        fontSize: 16,
        color: TEXT_COLOR_WHITE,
        textAlign: "center"
    },
    fingerprintButton: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: BORDER_RADIUS,
        borderWidth: 1,
        borderColor: ACCENT_COLOR
    },
    fingerprintButtonIcon: {
        width: 30,
        height: 31,
        marginRight: 10
    },
    fingerprintButtonText: {
        fontSize: 14,
        color: ACCENT_COLOR,
        textAlign: "center"
    }
});

export default styles;
