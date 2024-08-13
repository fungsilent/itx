import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import _ from 'lodash'
import { useLiveQuery } from 'drizzle-orm/expo-sqlite'
import db from '#src/lib/db'
import { schema } from '#src/lib/db/schema'

import Section from '#src/component/setting/Section'
import Select from '#src/component/setting/Select'

const Setting = () => {
    const { t, i18n } = useTranslation()
    // const { data }= useLiveQuery(db.select().from(schema.setting))
    const [themeMode, setThemeMode] = useState('light')
    const [language, setLanguage] = useState('zh-TW')
    
    const option = _.map(i18n.options.resources, (locale, lang) => {
        return {
            label: t('languageName', { lng: lang }),
            value: lang,
        }
    })

    return (
        <View style={styles.container}>
            <Section>
                <Select
                    title={t('setting.theme.mode')}
                    value={t(`setting.theme.${themeMode}`)}
                    options={[
                        { label: t('setting.theme.light'), value: 'light' },
                        { label: t('setting.theme.dark'), value: 'dark' },
                    ]}
                    onChange={value => setThemeMode(value)}
                />
                <Select
                    title={t('setting.language')}
                    value={t('languageName', { lng: language })}
                    options={option}
                    onChange={value => setLanguage(value)}
                />
            </Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 12,
    },
})

export default Setting