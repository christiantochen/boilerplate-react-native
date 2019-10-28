import { StyleSheet } from 'react-native';
import {
    RESET_STYLE,
    ACCENT_COLOR,
    BACKGROUND_COLOR,
    TEXT_COLOR_WHITE,
    BORDER_RADIUS,
    LOGO_SIZE_SMALL
} from 'app/fixtures/styles';
import { BACKGROUND_COLOR_WHITE, TEXT_COLOR } from '../../fixtures/styles';

const styles = StyleSheet.create({
    container: {
        ...RESET_STYLE,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: ACCENT_COLOR
    },
    header: {
        ...RESET_STYLE,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerLogo: {
        ...RESET_STYLE,
        ...LOGO_SIZE_SMALL,
        margin: 7
    },
    headerTitle: {
        ...RESET_STYLE,
        color: '#FFFFFF',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    profileContent: {
        ...RESET_STYLE,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    profilePicture: {
        ...RESET_STYLE,
        height: 70,
        width: 70,
        marginBottom: 14,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    profileName: {
        fontSize: 15,
        color: TEXT_COLOR_WHITE
    },
    profileSub: {
        fontSize: 13,
        opacity: .5,
        color: TEXT_COLOR_WHITE,
        marginBottom: 14
    },
    selectedPitRow: {
        ...RESET_STYLE,
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: BACKGROUND_COLOR_WHITE
    },
    pitName: {
        fontSize: 16,
        color: TEXT_COLOR
    },
    contractorName: {
        fontSize: 12,
        color: TEXT_COLOR,
        opacity: .5
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    logoutText: {
        color: TEXT_COLOR_WHITE,
        fontSize: 14
    },
    version: {
        color: TEXT_COLOR_WHITE,
        fontSize: 13,
        textAlign: "center",
        padding: 8,
        marginTop: 10
    }
});

export default styles;
