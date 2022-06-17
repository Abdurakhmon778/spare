import { RN } from "../../../components"
import { COLORS, FONTS, SIZES } from "../../../constants"

export const styles = RN.StyleSheet.create({
    // root
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.margin,
        paddingHorizontal: SIZES.margin
    },
    // header
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: COLORS.white,

    },
    userImageBox: {},
    back: {},
    userImage: {
        width: 40,
        height: 40,
    },
    // user info
    userInfo: {
        marginTop: SIZES.margin - 3
    },
    title: {
        ...FONTS.h2,
        lineHeight: 26,
        color: COLORS.black
    }
    ,
    question: {
        ...FONTS.body1,
        color: COLORS.gray,
        marginTop: 13
    },
    // inputs 
    inputs: {
        marginTop: SIZES.margin2 - 7
    },
    rememberTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    text: { ...FONTS.body1, color: COLORS.gray, fontWeight: '400' },
    buttons: {
        marginTop: SIZES.margin2 * 2.2
    },
    footerImageBox: { marginTop: 8, alignItems: "center" },
    footerImage: {
        width: 38,
        height: 38,
        resizeMode: 'cover'
    }
})