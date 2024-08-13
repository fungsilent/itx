import { useState } from 'react'
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native'
import Item, { ItemProps } from '#src/component/setting/Item'

export type SelectOptions<Value> = {
    label: string,
    value: Value,
}

export type SelectProps<Value> = ItemProps & {
    options: SelectOptions<Value>[],
    onChange?: (value: Value) => void,
}

const Select = <Value,>(props: SelectProps<Value>) => {
    const [showModal, toggleModal] = useState(false)

    return (
        <View>
            <Item {...props} onPress={() => toggleModal(prevState => !prevState)}/>
            <Modal visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    {props.options.map((option, index) => (
                        <Pressable key={index} onPress={() => {
                            console.log(option.value)
                            if (props.onChange) props.onChange(option.value)
                            toggleModal(false)
                        }}>
                            <Text>{option.label}</Text>
                        </Pressable>
                    ))}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Select