// React Native
import { View, Text, StyleSheet } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'
import type { NativeStackHeaderProps } from '@react-navigation/native-stack'

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'

const Header = ({ route, options, back }: NativeStackHeaderProps) => {
    const title = getHeaderTitle(options, route.name)
    const renderLeft = options.headerLeft || back ? <FontAwesomeIcon icon={faArrowLeft}/> : null
    const RenderRight = options.headerRight
    return (
        <View style={styles.header}>
            {/* {renderLeft} */}
            <Text style={styles.title}>{title}</Text>
            {/* {options.headerRight} */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7f7f7',
    },
    content: {
        backgroundColor: '#f7f7f7',
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
    },
    back: {
        marginRight: 16,
    },
    buttons: {
        flexDirection: 'row',
        columnGap: 12,
    },
})

export default Header