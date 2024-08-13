import { Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native'

export type ItemProps = {
    title?: string,
    subTitle?: string,
    value?: string,
    onPress?: (event: GestureResponderEvent) => void
}

const Item = (props: ItemProps) => {
    return (
        <Pressable style={styles.item} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
            {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
            {props.value && <Text style={styles.value}>{props.value}</Text>}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        rowGap: 12,
        paddingHorizontal : 16,
        paddingVertical: 16,
        backgroundColor: 'while',
    },
    title: {

    },
    subTitle: {
        fontSize: 12,
        color: 'darkgray'
    },
    value: {
        fontSize: 12,
        color: 'deepskyblue'
    }
})

export default Item