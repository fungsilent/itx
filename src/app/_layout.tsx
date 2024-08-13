// React Native
import { View, Text, StyleSheet } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

// Expo
import { Stack, Link } from 'expo-router'
import { useFonts } from 'expo-font'

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical'

// Localization
import i18n from '#src/lib/i18n'
import { I18nextProvider, useTranslation } from 'react-i18next'

const Rootlayout = () => {
    const { t } = useTranslation()

    const options: NativeStackNavigationOptions = {
        headerTitleAlign: 'left',
        statusBarAnimation: 'slide',
        headerShadowVisible: false,
        headerBackVisible: false,
        headerStyle: styles.header,
        headerTitle: ({ children }) => (
            <Text style={styles.title}>{children}</Text>
        )
    }

    /*
     * Render
     */
    return (
        <I18nextProvider i18n={i18n}>
        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
            <GestureHandlerRootView>
                <Stack
                    screenOptions={{
                        contentStyle: styles.content,
                    }}
                >
                    <Stack.Screen
                        name='index'
                        options={{
                            ...options,
                            title: t('tasks.title'),
                            headerRight: props => (
                                <View style={styles.buttons}>
                                    <Link href='/add'>
                                        <FontAwesomeIcon icon={faPlus} color={props.tintColor}/>
                                    </Link>
                                    <Link href='/setting'>
                                        <FontAwesomeIcon icon={faEllipsisVertical} color={props.tintColor}/>
                                    </Link>
                                </View>
                            )
                        }}
                    />
                    <Stack.Screen
                        name='add'
                        options={{
                            ...options,
                            presentation: 'transparentModal',
                            title: t('addTask.title'),
                            headerLeft: props => (
                                <View style={styles.back}>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faXmark} color={props.tintColor}/>
                                    </Link>
                                </View>
                            )
                        }}
                    />
                    <Stack.Screen
                        name='setting'
                        options={{
                            ...options,
                            title: t('setting.title'),
                            headerLeft: props => (
                                <View style={styles.back}>
                                    <Link href='/'>
                                        <FontAwesomeIcon icon={faArrowLeft} color={props.tintColor}/>
                                    </Link>
                                </View>
                            ),
                        }}
                    />
                </Stack>
            </GestureHandlerRootView>
        {/* </ThemeProvider> */}
        </I18nextProvider>
    )
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: '#f7f7f7',
        backgroundColor: 'gainsboro',
    },
    content: {
        // backgroundColor: '#f7f7f7',
        backgroundColor: 'gainsboro',
    },
    title: {
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

export default Rootlayout