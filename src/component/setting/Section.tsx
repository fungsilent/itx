import { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type SectionProps = {
    children?: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
    return (
        <View style={styles.section}>
            {Children.map(children, (item, index) => (
                <>
                    {index != 0 && (
                        <View style={styles.line}/>
                    )}
                    {item}
                </>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: 'white',
    },
    line: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})

export default Section