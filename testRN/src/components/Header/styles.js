import { StyleSheet } from 'react-native';
import COLORS from '../../styles/colors'

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: "5%",
        alignItems: 'center',
        height: 60,
        backgroundColor: COLORS.SECONDARY,
    },
    containerHome: {
        justifyContent: 'space-between',
    },
    title: {
        color: COLORS.PRIMARY,
    },
    textContainer: {
        flex: 1,
        width: '100%',
        marginRight: '10%',
        alignItems: 'center',
    }
})
export default style