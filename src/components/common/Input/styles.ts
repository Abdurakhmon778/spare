import { RN } from "../.."
import { COLORS, FONTS, SIZES } from "../../../constants"

export const styles = RN.StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderColor: COLORS.gray2,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        height: 50,
        flexDirection: "row",
        marginBottom: 7
    },
    rightIcon: {
        marginLeft: 9,
        marginRight: 19,
        alignItems: 'center',
        justifyContent: "center"
    },
    leftIcon: {
        marginLeft: 19,
        marginRight: 9,
        alignItems: 'center',
        justifyContent: "center"
    },
    input: {
        padding: 0,
        margin: 0,
        ...FONTS.body1,
        color: COLORS.gray,
        flexGrow: 1
    }
})