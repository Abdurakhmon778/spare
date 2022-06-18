import React from 'react'

// components
import { RN } from '../..'

// contants
import { COLORS } from '../../../constants'

// types
import { inputType } from '../../../types'

// styles
import { styles } from './styles'

const Input = ({ LeftIcon, RightIcon, value, onChangeText, placeholder, keyboardType, secureTextEntry, style }: inputType) => {

    // Render

    function renderLeftIcon() {
        return (
            <RN.View style={styles.leftIcon}>
                {LeftIcon && <LeftIcon />}
            </RN.View>
        )
    }

    function renderRightIcon() {
        return (
            <RN.View style={styles.rightIcon}>
                {RightIcon && <RightIcon />}
            </RN.View>
        )
    }

    function renderInput() {
        return (
            <RN.TextInput
                style={styles.input}
                placeholderTextColor={COLORS.gray}
                placeholder={placeholder ?? ""}
                value={value ?? ""}
                onChangeText={onChangeText}
                keyboardType={keyboardType ?? "default"}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                autoCorrect={false}
            />
        )
    }

    return (
        <RN.View style={[styles.container, style]}>
            {/* Render Left icon */}
            {renderLeftIcon()}

            {/* Render input */}
            {renderInput()}

            {/* Render Right icon */}
            {renderRightIcon()}
        </RN.View>
    )
}

export default Input