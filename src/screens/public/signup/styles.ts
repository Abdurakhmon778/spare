import { RN } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = RN.StyleSheet.create({
    // root
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.margin,
        paddingHorizontal: SIZES.margin,
    },

    // header
    header: {},
    headerBackBtn: {},
    headerImageBox: {
        alignItems: "center"
    },
    headerImage: {
        width: 62,
        height: 84,
        resizeMode: "cover"
    },
    headerTitleBox: {},
    headerTitle: {
        ...FONTS.h2,
        color: COLORS.black,
        textAlign: "center",
        lineHeight: 24,
        marginTop: SIZES.margin2
    },

    // inputs
    imputs: {
        marginTop: SIZES.margin2,
        backgroundColor: COLORS.white,
    },

    // footer
    footer: {
    },
    footerTextBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: SIZES.margin,
    },
    footerText: {
        ...FONTS.body1,
        color: COLORS.gray
    },
    signin: {
        marginLeft: 5,
        color: COLORS.blue
    }
})