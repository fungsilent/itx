import moment from 'moment'
import { RefreshControl, SafeAreaView, ScrollView, View, Text, Button, StyleSheet } from 'react-native'
import { useCallback, useState } from 'react'
import Note from '#src/component/Note'

const tasks = [
    { name: 'Task 1', isDone: false, createdAt: '2024-08-01T20:29:28.000+08:00' },
    { name: 'Task 2', isDone: false, createdAt: '2024-08-12T12:00:00.000+08:00' },
    { name: 'Task 3', isDone: false, createdAt: '2024-08-12T20:29:28.000+08:00' },
]

const Index = () => {
    console.log(moment().local().toISOString(true))
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {tasks.map((item, index) => (
                    <Note {...item} key={index}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    scrollView: {
        rowGap: 12,
    },
    isDone: {

    }
})
export default Index