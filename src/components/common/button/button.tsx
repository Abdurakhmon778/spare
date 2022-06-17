import React from "react"
import { RN } from "../.."
import { FONTS, SIZES } from "../../../constants"
import { btnType } from "../../../types/button"


const Button = ({ textColor, backgroundColor, onPress, title }: btnType) => {

    return (
        <RN.TouchableOpacity
            style={{
                width: SIZES.width - SIZES.margin,
                backgroundColor: backgroundColor,
                paddingVertical: 15,
                borderRadius: SIZES.margin - 1
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