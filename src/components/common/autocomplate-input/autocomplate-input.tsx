import React from "react"
import Input from '../Input/Input'
import { RN } from "../.."

// styles
import { styles } from './styles'
import { ICONS } from "../../../constants";

// types
interface IProps {
    value?: string;
    onChangeText?: (value: string) => void;
    data?: string[];
    placeholder: string;
    LeftIcon?: any;
    setState?: any;
}

const AutoComplateInput = ({ value, onChangeText, data, placeholder, LeftIcon, setState }: IProps) => {


    const isHas = (firstValue: string, secondValue: string) => {
        secondValue = secondValue.trim().toUpperCase()
        firstValue = firstValue.toUpperCase()

        return firstValue.indexOf(secondValue) > -1
    }

    const filteredData = React.useMemo(function () {
        const isSelected = data?.map(c => c?.toUpperCase()).includes((value?.toUpperCase() ?? ""))
        if (!value || isSelected) return []


        return (data ?? []).filter(d => isHas(d, value))
    }, [value])

    const onSelectItem = (name: string) => {
        setState(name)
    }

    return (
        <RN.View style={styles.container}>
            <RN.View style={filteredData.length ? styles.dataList : {}}>
                <RN.ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {
                        filteredData.map((name, i) => {

                            return (
                                <RN.TouchableOpacity
                                    key={i}
                                    onPress={() => onSelectItem(name)}
                                    style={styles.listItem}
                                >
                                    <RN.Text style={styles.listItemText}>{name}</RN.Text>
                                </RN.TouchableOpacity>
                            )
                        })
                    }
                </RN.ScrollView>
            </RN.View>


            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                LeftIcon={LeftIcon}
                RightIcon={() => (
                    <RN.TouchableOpacity style={{
                        transform: [
                            { rotate: filteredData.length ? '180deg' : '0deg' }
                        ]
                    }}>
                        <ICONS.ArrowBottom />
                    </RN.TouchableOpacity>
                )}
                style={
                    filteredData.length ? {
                        borderTopLeftRadius: 0,
                        borderTopEndRadius: 0,
                    } : {}
                }
            />

        </RN.View>
    )
}

export default AutoComplateInput