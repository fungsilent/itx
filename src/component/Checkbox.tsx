
import { useCallback } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated'
import { toInteger } from 'lodash'

// Icon
import { FontAwesomeIcon, Props as FontAwesomeIconProps } from '@fortawesome/react-native-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare'
import { faSquare as frSquare } from '@fortawesome/free-regular-svg-icons/faSquare'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

type CheckboxProps = Pick<FontAwesomeIconProps, 'size'>

const Checkbox = ({ size = 16 }: CheckboxProps) => {
    const tickScale = useSharedValue(1)
    const tickBgScale = useSharedValue(1)

    const tickAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { scale: tickScale.value }
        ],
    }))

    const tickBgAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { scale: tickBgScale.value }
        ],
    }))

    const onPress = useCallback(() => {
        const toggleScale = toInteger((tickScale.value + 1) % 2)   // 0 or 1
        const duration = 200
        const delay = 150

        if (toggleScale === 0) {
            // hide tick
            tickScale.value = withTiming(toggleScale, { duration })
            tickBgScale.value = withDelay(delay, withTiming(toggleScale, { duration }))
        } else {
            // show tick
            tickBgScale.value = withTiming(toggleScale, { duration })
            tickScale.value = withDelay(delay, withTiming(toggleScale, { duration }))
        }
    }, [])
    
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Animated.View style={[styles.tick, tickAnimatedStyles]}>
                <FontAwesomeIcon icon={faCheck} size={size * 0.5} color='white'/>
            </Animated.View>
            <Animated.View style={[styles.tickBg, tickBgAnimatedStyles]}>
                <FontAwesomeIcon icon={faSquare} size={size} color='lightseagreen'/>
            </Animated.View>
            <FontAwesomeIcon icon={frSquare} size={size} color='silver'/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tick: {
        position: 'absolute',
        zIndex: 2,
    },
    tickBg: {
        position: 'absolute',
        zIndex: 1,
    },
})
export default Checkbox