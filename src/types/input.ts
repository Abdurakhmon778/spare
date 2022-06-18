import type { ViewStyle } from 'react-native'
export interface inputType {
    placeholder: string;
    LeftIcon?: any,
    RightIcon?: any,
    value?: string;
    onChangeText?: (value: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'numeric' | 'email-address';
    style?: ViewStyle;
}