import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors'

const style = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LINE_GRAY,
    },
    title: {
        fontSize: 16,
    }
})
export default style