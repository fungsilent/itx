import { View, Text, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import ReanimatedSwipeable, { SwipeableProps } from 'react-native-gesture-handler/ReanimatedSwipeable'

import Checkbox from '#src/component/Checkbox'

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'

type NoteProps = {
    name: string,
    isDone: boolean,
    createdAt: string,
}

const Note = (props: NoteProps) => {
    return (
        <ReanimatedSwipeable
            containerStyle={styles.container}
            childrenContainerStyle={styles.content}
            renderRightActions={NoteRight}
            overshootRight={false}
        >
            <Checkbox size={30}/>
            <Text>{props.name}</Text>
        </ReanimatedSwipeable>
    )
}

const NoteRight: SwipeableProps['renderRightActions'] = (progress, drag, swipeable) => {
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: drag.value + 52 },
            ],
        }
    })

    return (
        <Animated.View style={[styles.remove, animatedStyles]}>
            <FontAwesomeIcon icon={faTrashCan} color='white' size={20}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 22,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    remove: {
        backgroundColor: 'firebrick',
        justifyContent: 'center',
        alignItems: 'center',
        width: 52,  // 16 padding * 2 + 20 size
    },
    scrollView: {

    },
    isDone: {

    }
})
export default Note