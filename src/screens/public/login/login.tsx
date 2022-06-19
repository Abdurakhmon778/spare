import React from 'react'
import * as Animatable from 'react-native-animatable';

import { CheckBox } from '@rneui/themed';

// components
import { RN } from '../../../components'
import { BackBtn, Button, Input, } from '../../../components/common'

// constants
import { COLORS, ICONS, IMAGES } from '../../../constants'

// styles
import { styles } from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { List, RootStackParamList } from '../../../types';

const Login = ({ navigation }: NativeStackScreenProps<RootStackParamList, List.login>) => {
    const [cheched, setChecked] = React.useState(false)

    // Render

    function renderHeader() {
        return (
            <RN.View style={styles.header}>
                <Animatable.View
                    style={styles.back}
                    animation={"fadeInLeft"}
                >
                    <BackBtn />
                </Animatable.View>
                <RN.View style={styles.userImageBox}>
                    <Animatable.Image
                        animation={"bounceInRight"}
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
                <Animatable.Text delay={300} animation={"fadeInDown"} style={styles.title}>Welcome back,</Animatable.Text>
                <Animatable.Text delay={300} animation={"fadeInDown"} style={[styles.title, { fontFamily: "Inter-Black" }]}>Ugo</Animatable.Text>
                <Animatable.Text delay={600} animation={"fadeInDown"} style={styles.question}>Hope you are doing great?</Animatable.Text>
            </RN.View>
        )
    }

    function renderInputs() {
        return (
            <RN.View style={styles.inputs}>

                <Animatable.View animation={"bounceInDown"} delay={400}>
                    <Input
                        placeholder='First Name'
                        keyboardType={'default'}
                        LeftIcon={() => (
                            <ICONS.UserSvg height={17} width={16} />
                        )}
                    />
                </Animatable.View>

                <Animatable.View animation={"bounceInDown"} delay={600}>
                    <Input
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        LeftIcon={() => (
                            <ICONS.PasswordSvg height={17} width={14} />
                        )}
                        RightIcon={() => (
                            <ICONS.EyeSlashSvg height={17} width={17} />
                        )}

                    />
                </Animatable.View>

                <Animatable.View animation={"fadeInLeft"} style={styles.rememberTextBox}>
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
                </Animatable.View>
            </RN.View>
        )
    }

    function renderButtons() {
        return (
            <RN.View style={styles.buttons}>
                <Animatable.View animation={"fadeInUpBig"} delay={340}>
                    <Button
                        backgroundColor={COLORS.blue}
                        textColor={COLORS.white}
                        title={"Sign In"}
                        onPress={() => {
                            console.log("sign in")
                            navigation.navigate(List.verify)
                        }}
                    />
                </Animatable.View>

                <Animatable.View animation={"fadeInUp"} delay={670}>
                    <Button
                        backgroundColor={COLORS.white}
                        textColor={COLORS.blue}
                        title={"Sign Up"}
                        onPress={() => {
                            console.log("sign in")
                            navigation.navigate(List.signup)
                        }}
                    />
                </Animatable.View>
            </RN.View>
        )
    }

    function renderFooterImage() {
        return (
            <Animatable.View animation={"bounceInUp"} delay={1000} style={styles.footerImageBox}>
                <RN.Image source={ICONS.Login} style={styles.footerImage} />
            </Animatable.View>
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