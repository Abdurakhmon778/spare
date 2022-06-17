import React from 'react'

import { CheckBox, Icon } from '@rneui/themed';

// components
import { RN } from '../../../components'
import { BackBtn, Button, Input, } from '../../../components/common'

// constants
import { COLORS, ICONS, IMAGES } from '../../../constants'

// styles
import { styles } from './styles'

const Login = () => {
    const [cheched, setChecked] = React.useState(false)

    // Render

    function renderHeader() {
        return (
            <RN.View style={styles.header}>
                <RN.View style={styles.back}>
                    <BackBtn />
                </RN.View>
                <RN.View style={styles.userImageBox}>
                    <RN.Image
                        source={IMAGES.Image.User}
                        resizeMode="cover"
                        style={styles.userImage}
                    />
                </RN.View>
            </RN.View>
        )
    }

    function renderUserInfo() {
        return (
            <RN.View style={styles.userInfo}>
                <RN.Text style={styles.title}>Welcome back,</RN.Text>
                <RN.Text style={[styles.title, { fontFamily: "Inter-Black" }]}>Ugo</RN.Text>
                <RN.Text style={styles.question}>Hope you are doing great?</RN.Text>
            </RN.View>
        )
    }

    function renderInputs() {
        return (
            <RN.View style={styles.inputs}>
                <Input
                    placeholder='First Name'
                    keyboardType={'default'}
                    LeftIcon={() => (
                        <RN.Image
                            source={ICONS.User}
                            style={{
                                height: 17,
                                width: 16,
                                resizeMode: "cover"
                            }}
                        />
                    )}
                />

                <Input
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    LeftIcon={() => (
                        <RN.Image
                            source={ICONS.Password}
                            style={{
                                height: 17,
                                width: 14,
                                resizeMode: "cover"
                            }}
                        />
                    )}
                    RightIcon={() => (
                        <RN.Image
                            source={ICONS.EyeSlash}
                            style={{
                                height: 17,
                                width: 17,
                                resizeMode: "cover"
                            }}
                        />
                    )}

                />

                <RN.View style={styles.rememberTextBox}>
                    <CheckBox
                        title="Remember me"
                        checked={cheched}
                        onPress={() => setChecked(ch => !ch)}
                        textStyle={styles.text}
                        containerStyle={{ margin: 0, padding: 0 }}
                    />

                    <RN.TouchableOpacity>
                        <RN.Text style={{ ...styles.text, color: COLORS.blue }}>Forget your password?</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            </RN.View>
        )
    }

    function renderButtons() {
        return (
            <RN.View style={styles.buttons}>
                <Button
                    backgroundColor={COLORS.blue}
                    textColor={COLORS.white}
                    title={"Sign In"}
                    onPress={() => console.log("sign in")}
                />

                <Button
                    backgroundColor={COLORS.white}
                    textColor={COLORS.blue}
                    title={"Sign Up"}
                    onPress={() => console.log("sign in")}
                />
            </RN.View>
        )
    }

    function renderFooterImage() {
        return (
            <RN.View style={styles.footerImageBox}>
                <RN.Image source={ICONS.Login} style={styles.footerImage} />
            </RN.View>
        )
    }
    return (
        <RN.View style={styles.container}>
            {/* Render header */}
            {renderHeader()}

            {/* Render user info */}
            {renderUserInfo()}

            {/* Render inputs */}
            {renderInputs()}

            {/* Render buttons */}
            {renderButtons()}

            {/* Render footer image */}
            {renderFooterImage()}
        </RN.View>
    )
}

export default Login