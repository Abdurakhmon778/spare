import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import axios from 'axios'

import { KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable'

// components
import { RN } from '../../../components'
import { AutoComplateInput, BackBtn, Input, Button } from '../../../components/common'

// constants
import { COLORS, ICONS, IMAGES } from '../../../constants'

// styles
import { styles } from './styles'
import { List, RootStackParamList } from '../../../types'


type SignupNavigationType = NativeStackNavigationProp<RootStackParamList, List.signup>

const Signup = () => {
    const navigation = useNavigation<SignupNavigationType>()

    const [countrys, setCountrys] = React.useState([])
    const [country, setCountry] = React.useState("")
    const [keyboardActive, setKeyboardActive] = React.useState<boolean | null>(null)

    const getAllCountrys = async () => {
        try {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            const data = await res.data
            setCountrys(data.map((item: any) => item.name.common))
        } catch (error) {
            console.log("error", error)
        }
    }

    React.useEffect(() => {
        getAllCountrys()

        return () => {
            setCountrys([])
            setCountry("")
        }
    }, [])

    React.useEffect(() => {

        let keyboardDidShow = RN.Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardActive(true)
        })

        let keyboardDidHide = RN.Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardActive(false)
        })

        return () => {
            keyboardDidShow.remove()
            keyboardDidHide.remove()
            setCountrys([])
            setCountry("")
        }

    }, [])



    // Render
    function renderHeader() {
        return (
            <RN.View style={styles.header}>
                <RN.View style={styles.headerBackBtn}>
                    <BackBtn />
                </RN.View>

                <Animatable.View
                    animation={"fadeInDown"}
                    style={styles.headerImageBox}
                >
                    <RN.Image
                        source={IMAGES.Image.Dollor}
                        style={styles.headerImage}
                    />
                </Animatable.View>

                <Animatable.View
                    style={styles.headerTitleBox}
                    animation={"fadeInLeftBig"}
                >
                    <RN.Text style={styles.headerTitle}>Create an account</RN.Text>
                </Animatable.View>
            </RN.View>
        )
    }

    function renderInput() {
        return (
            <RN.View
                style={styles.imputs}
            >

                <Animatable.View
                    animation={"bounce"}
                    delay={100}
                >
                    <Input
                        placeholder={"First name"}
                        LeftIcon={() => (
                            <ICONS.UserSvg
                                height={17}
                                width={15}
                            />
                        )}
                    />
                </Animatable.View>

                <Animatable.View
                    animation={"bounce"}
                    delay={200}
                >
                    <Input
                        placeholder={"Phone number"}
                        keyboardType={'numeric'}
                        LeftIcon={() => (
                            <ICONS.PhoneSvg
                                height={17}
                                width={15}
                            />
                        )}
                    />
                </Animatable.View>


                <Animatable.View
                    animation={"bounce"}
                    delay={300}
                >
                    <Input
                        placeholder={"Email"}
                        keyboardType={'email-address'}
                        LeftIcon={() => (
                            <ICONS.EmailSvg
                                height={17}
                                width={17}
                            />
                        )}
                    />
                </Animatable.View>

                <Animatable.View
                    animation={"bounce"}
                    delay={400}
                >
                    <Input
                        placeholder={"Password"}
                        secureTextEntry={true}
                        LeftIcon={() => (
                            <ICONS.PasswordSvg
                                height={17}
                                width={17}
                            />
                        )}
                    />
                </Animatable.View>

                <Animatable.View
                    animation={"bounce"}
                    delay={500}
                >
                    <AutoComplateInput
                        placeholder='Contry'
                        data={countrys}
                        value={country}
                        setState={setCountry}
                        onChangeText={setCountry}
                        LeftIcon={() => (
                            <ICONS.GlobasSvg
                                height={17}
                                width={17}
                            />
                        )}
                    />

                </Animatable.View>


            </RN.View>
        )
    }

    function renderFooter() {
        return (
            <Animatable.View
                style={styles.footer}
                animation={"fadeInUpBig"}
            >
                <Button
                    title='Sign Up'
                    backgroundColor={COLORS.blue}
                    textColor={COLORS.white}
                />

                <RN.View style={styles.footerTextBox}>
                    <RN.Text style={styles.footerText}>Already have an account?</RN.Text>
                    <RN.TouchableOpacity onPress={() => navigation.navigate(List.login)}>
                        <RN.Text style={[styles.footerText, styles.signin]}>Sign in</RN.Text>
                    </RN.TouchableOpacity>
                </RN.View>
            </Animatable.View>
        )
    }

    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <RN.ScrollView>
                <RN.Pressable
                    onPress={RN.Keyboard.dismiss}
                >
                    {/* Render header */}
                    {renderHeader()}

                    {/* Render inputs */}
                    {renderInput()}

                    {/* Render footer */}
                    {renderFooter()}
                </RN.Pressable>
            </RN.ScrollView>

        </KeyboardAvoidingView>
    )
}

export default Signup