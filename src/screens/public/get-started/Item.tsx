import React from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable'

// components
import { RN } from "../../../components"
import { Button } from "../../../components/common"

// constants
import { COLORS } from "../../../constants"

// types
import { List, slideItem, RootStackParamList } from "../../../types"

// styles
import { styles } from "./styles"

type loginScreenProps = NativeStackNavigationProp<RootStackParamList, List.getStarted>

const Item = ({ title, Image, ImageHeight, ImageWidth, description, index, dataLength }: slideItem) => {

    const navigation = useNavigation<loginScreenProps>()

    // Render
    function renderImage() {
        return (
            <RN.View style={styles.imageBox}>
                <Animatable.Image
                    animation={"slideInDown"}
                    delay={300}
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
                <Animatable.Text animation={'wobble'} delay={500} style={styles.title}>{title}</Animatable.Text>
                <Animatable.Text animation={'tada'} delay={900} style={styles.description}>{description}</Animatable.Text>
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
                            navigation.navigate(List.login)
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