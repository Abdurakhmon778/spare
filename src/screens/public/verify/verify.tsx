import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import * as Animatable from 'react-native-animatable'

// components
import { RN } from '../../../components'
import { BackBtn, Button } from '../../../components/common'
import { COLORS, IMAGES, SIZES } from '../../../constants'

// styles
import { styles } from './styles'

const Verify = () => {
    const [code, setCode] = React.useState("")

    const phoneNumber = "+998-915278547"

    // Render

    function renderHeader() {
        return (
            <RN.View style={styles.header}>
                <Animatable.View animation={"bounceInRight"} delay={230} style={styles.headerBack}>
                    <BackBtn />
                </Animatable.View>

                <Animatable.View animation={"bounceInDown"} delay={540} style={styles.headerVerifyLogoBox}>
                    <IMAGES.Svg.VerifyLogo
                        width={194}
                        height={194}
                    />
                </Animatable.View>
            </RN.View>
        )
    }

    function renderVerifyTitle() {
        return (
            <RN.View style={styles.verifyTitleBox}>
                <Animatable.Text animation={"fadeInLeftBig"} delay={200} style={styles.verifyTitle}>OTP Verification</Animatable.Text>
                <RN.View style={styles.verifyPhone}>
                    <Animatable.Text animation={"fadeInLeftBig"} delay={200} style={styles.verifyNotifyText}>Enter the OTP sent to </Animatable.Text>
                    <Animatable.Text animation={"fadeInRightBig"} delay={200} style={[styles.verifyNotifyText, { fontFamily: "Inter-SemiBold", color: COLORS.black }]}>{phoneNumber}</Animatable.Text>
                </RN.View>
            </RN.View>
        )
    }

    function renderVerifyInput() {
        return (
            <Animatable.View animation={"fadeInUpBig"} delay={300} style={styles.verifyInputBox}>
                <OTPInputView
                    style={{
                        width: '80%',
                        backgroundColor: "#fff",
                        height: 100
                    }}
                    pinCount={4}
                    code={code}
                    onCodeChanged={setCode}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.codeInputFieldStyle}
                    keyboardType="number-pad"
                    onCodeFilled={(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                    })}
                />

                <RN.View style={styles.verifyInputBottomTextsBox}>
                    <RN.Text style={styles.verifyNotifyText}>Didn’t recieve an OTP?</RN.Text>
                    <RN.TouchableOpacity>
                        <RN.Text style={[styles.verifyNotifyText, { color: COLORS.red, marginLeft: 5 }]}>Resend OTP</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            </Animatable.View>
        )
    }

    function renderVeriftFooterBottom() {
        return (
            <Animatable.View animation={"zoomInUp"} delay={600} style={styles.veriftFooterBottom}>
                <Button
                    backgroundColor={COLORS.blue}
                    textColor={COLORS.white}
                    title={"Verify & Proceed"}
                />
            </Animatable.View>
        )
    }

    return (
        <RN.View style={styles.container}>
            {/* Render header */}
            {renderHeader()}

            {/* Render verify title or phone number */}
            {renderVerifyTitle()}

            {/* Render verify input */}
            {renderVerifyInput()}

            {/*  Render verify footer bottom */}
            {renderVeriftFooterBottom()}
        </RN.View>
    )
}

export default Verify