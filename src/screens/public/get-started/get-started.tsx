import React from 'react'

// components
import { RN } from '../../../components'
import Item from './Item'

// constants
import { COLORS, IMAGES, SIZES } from '../../../constants'

// styles
import { styles } from './styles'

// types
import { slideItem } from '../../../types'

// Data
const DATA: slideItem[] = [
    {
        Image: IMAGES.Image.Slide1,
        ImageWidth: 300,
        ImageHeight: 288,
        index: 0,
        title: "Spend & Save With Spare",
        description: "With spare, you can for bills, food, entertainment, utilities and still save"
    },
    {
        Image: IMAGES.Image.Slide2,
        ImageWidth: 230,
        ImageHeight: 281,
        index: 1,
        title: "Spare Is Easy & Secure",
        description: "spare is easy to use and all your transactions are secured"
    },
    {
        Image: IMAGES.Image.Slide3,
        ImageWidth: 328,
        ImageHeight: 240,
        index: 2,
        title: "Send Money With Spare",
        description: "Transfer money easily to friends and families on your contact list using spare"
    }
]

const GetStarted = () => {

    const scrollX = React.useRef(new RN.Animated.Value(0)).current

    // Render

    function renderData() {
        return (
            <RN.Animated.FlatList
                data={DATA}
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Item {...item} dataLength={DATA.length} />}
                onScroll={
                    RN.Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )
                }
            />
        )
    }

    function renderDots() {
        return (
            <RN.View style={styles.dotsBox}>
                {
                    DATA.map((_, index) => {
                        const inputRange = [(index - 1) * SIZES.width, index * SIZES.width, (index + 1) * SIZES.width]
                        const width = scrollX.interpolate({
                            inputRange,
                            outputRange: [8, 20, 8],
                            extrapolate: "clamp"
                        })
                        const backgroundColor = scrollX.interpolate({
                            inputRange,
                            outputRange: [COLORS.gray2, COLORS.blue, COLORS.gray2],
                            extrapolate: "clamp",
                        })
                        return (
                            <RN.Animated.View style={[styles.dot, { width, backgroundColor }]} key={index.toString()} />
                        )
                    })
                }
            </RN.View>
        )
    }

    return (
        <RN.View style={styles.container}>
            {/* Render Data */}
            {renderData()}

            {/* Render Dots */}
            {renderDots()}
        </RN.View>
    )
}

export default GetStarted