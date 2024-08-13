import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite/next'

const expoDB = openDatabaseSync('itx.db', { enableChangeListener: true })

const db = drizzle(expoDB)

export default db