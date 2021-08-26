import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors'

const style = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderWidth: 2,
        borderRadius: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultMode:{
        borderColor: COLORS.LINE_GRAY,
    },
    selectedMode:{
        backgroundColor: COLORS.SELECTED_GREEN,
        borderColor: COLORS.GREEN,
    }
})
export default style