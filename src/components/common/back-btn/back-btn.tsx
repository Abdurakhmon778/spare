import React from 'react'

// components
import { RN } from '../..'

// contstants
import { ICONS } from '../../../constants'

// types
import { backBtnType } from '../../../types'

// styles
import { styles } from './styles'

const BackBtn = ({ onPress }: backBtnType) => {

    return (
        <RN.TouchableOpacity
            style={styles.backBtn}
            hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
            onPress={onPress}

        >
            <RN.Image
                source={ICONS.LeftArror}
                style={styles.backBtnImage}
            />
        </RN.TouchableOpacity>
    )
}

export default BackBtn