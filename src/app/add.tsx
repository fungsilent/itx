import { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

const AddTask = () => {
    const [name, setName] = useState('')
    
    // TODO: save task to db

    return (
        <View style={styles.view}>
            <TextInput
                style={styles.textInput}
                autoFocus={true}
                placeholder='add new task'
                onChangeText={text => setName(text)}
            />
            <Pressable
                style={styles.button}
            >
                <Text>Add</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        // flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        // backgroundColor: 'darksalmon'
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignSelf: 'flex-end',
        backgroundColor: 'skyblue',
        color: 'royalblue',
        padding: 8,
        marginRight: 12,
    },
})

export default AddTask