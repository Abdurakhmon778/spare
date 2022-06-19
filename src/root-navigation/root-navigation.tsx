import React from "react"

// navigation lib
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

// types
import { RootStackParamList } from '../types'

// screens
import { publicStackList, privateStackList } from "../screens/screens"

// root stack
const RootStack = createNativeStackNavigator<RootStackParamList>()

// root navigation
export default function RootNavigationStack() {

    const isAutharization = false
    const token = null


    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    header: () => null,
                    gestureEnabled: true,
                    fullScreenGestureEnabled: true,
                    animation: "slide_from_right",
                }}
            >
                {
                    (isAutharization && token) ? privateStackList(RootStack) : publicStackList(RootStack)
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
