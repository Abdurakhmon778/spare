import { RN } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.margin,
        paddingHorizontal: SIZES.margin
    },
    header: {},
    headerBack: {},
    headerVerifyLogoBox: {
        alignItems: "center",
        marginTop: SIZES.margin2 * 2
    },
    verifyTitleBox: {
        alignItems: "center",
        marginTop: SIZES.margin2 * 2
    },
    verifyPhone: {
        flexDirection: "row",
        marginTop: 15
    },
    verifyTitle: {
        ...FONTS.h2,
        color: COLORS.black,
        lineHeight: 25
    },
    verifyNotifyText: {
        ...FONTS.body1,
        color: COLORS.gray
    },
    verifyInputBox: {
        alignItems: 'center'
    },
    codeInputFieldStyle: {
        ...FONTS.h2,
        color: COLORS.black,
        lineHeight: 28,
        height: 50,
        width: 50,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: COLORS.gray
    },
    verifyInputBottomTextsBox: {
        marginTop: SIZES.margin * 0.8,
        flexDirection: "row",
        alignItems: "center",
    },
    veriftFooterBottom: {
        marginTop: SIZES.height * 0.05
    }
})