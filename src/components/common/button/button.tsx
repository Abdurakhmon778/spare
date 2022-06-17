import React from "react"
import { RN } from "../.."
import { COLORS, FONTS, SIZES } from "../../../constants"
import { btnType } from "../../../types"


const Button = ({ textColor, backgroundColor, onPress, title }: btnType) => {

    return (
        <RN.TouchableOpacity
            style={{
                flexGrow: 1,
                backgroundColor: backgroundColor,
                paddingVertical: 15,
                borderRadius: SIZES.margin - 1,
                borderWidth: 1,
                borderColor: COLORS.blue,
                marginVertical: 8
            }}
            onPress={onPress}
        >
            <RN.Text
                style={{
                    ...FONTS.h3_16,
                    textAlign: "center",
                    color: textColor,
                }}
            >{title}</RN.Text>
        </RN.TouchableOpacity>
    )
}

export default Button