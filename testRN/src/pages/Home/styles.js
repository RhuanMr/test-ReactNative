import { ColorPropType, StyleSheet } from 'react-native';
import COLORS from '../../styles/colors'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY,
    },
    logoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LINE_GRAY,
        paddingLeft: "7.5%"
    },
    titleContainer: {
        marginLeft: '5%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    online: {
        color: COLORS.GREEN
    },
    offline: {
        color: COLORS.TEXT_GRAY
    },
    statusContainer: {
        width: "100%",
        padding: "7.5%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statusTitle: {
        fontSize: 16,
    },
    switchContainer: {
        justifyContent: 'center'
    },
    intervalContainer: {
        flexGrow: 1,
        height: 90,
        width: "100%",
        paddingHorizontal: "7.5%"
    }
})
export default style;