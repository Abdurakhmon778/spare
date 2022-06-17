import React from "react"

// components
import { RN } from "../../../components"
import { Button } from "../../../components/common"

// constants
import { COLORS } from "../../../constants"

// types
import { slideItem } from "../../../types"

// styles
import { styles } from "./styles"

const Item = ({ title, Image, ImageHeight, ImageWidth, description, index, dataLength }: slideItem) => {

    // Render
    function renderImage() {
        return (
            <RN.View style={styles.imageBox}>
                <RN.Image
                    source={Image}
                    style={{
                        width: ImageWidth,
                        height: ImageHeight,
                        resizeMode: "contain"
                    }}
                />
            </RN.View>
        )
    }

    function renderInfo() {
        return (
            <RN.View style={styles.infoBox}>
                <RN.Text style={styles.title}>{title}</RN.Text>
                <RN.Text style={styles.description}>{description}</RN.Text>
            </RN.View>
        )
    }

    function renderButton() {
        return (
            ((dataLength ?? 0) - 1) === index ? (
                <RN.View style={styles.buttonBox}>
                    <Button
                        textColor={COLORS.white}
                        backgroundColor={COLORS.blue}
                        onPress={() => {
                            console.log("get started")
                        }}
                        title={"Get Started"}
                    />
                </RN.View>
            ) : null
        )
    }
    return (
        <RN.View style={styles.item}>
            {/*  Render Image*/}
            {renderImage()}

            {/* Render Info */}
            {renderInfo()}

            {/* Render Button */}
            {renderButton()}
        </RN.View>
    )
}

export default Item