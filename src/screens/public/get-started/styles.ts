import { RN } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        width: SIZES.width,
        height: SIZES.height,
        backgroundColor: COLORS.white,
        alignItems: "center"
    },
    imageBox: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 110
    },
    infoBox: {
        position: "absolute",
        top: SIZES.height * 0.61,
        width: SIZES.width,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black,
        paddingTop: 20,
        textAlign: "center"
    },
    description: {
        ...FONTS.body1,
        color: COLORS.gray,
        marginHorizontal: SIZES.margin2 * 3,
        textAlign: "center",
        marginTop: SIZES.margin - 6
    },
    dotsBox: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        top: SIZES.height * 0.78,
        width: SIZES.width,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.gray2,
        marginHorizontal: 3
    },
    buttonBox: {
        position: "absolute",
        top: SIZES.height * 0.85,
    }
})