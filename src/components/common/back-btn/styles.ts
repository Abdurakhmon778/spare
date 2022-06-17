import { RN } from "../.."
import { COLORS } from "../../../constants"

export const styles = RN.StyleSheet.create({
    backBtn: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.lightBlue2,
        borderRadius: 32 / 2
    },
    backBtnImage: {
        width: 8.5,
        height: 14.5,
        resizeMode: "contain"
    }
})