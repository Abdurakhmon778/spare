import { RN } from "../..";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = RN.StyleSheet.create({
    container: {},
    dataList: {
        maxHeight: 130,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopEndRadius: 10,
    },
    listItem: {
        paddingLeft: SIZES.margin2 * 1.5,
        paddingVertical: 7,
        flexGrow: 1,
    },
    listItemText: {
        ...FONTS.body1,
        color: COLORS.gray,
    }
})