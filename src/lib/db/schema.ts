// import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const note = sqliteTable('note', {
	id: text('id').primaryKey().$default(() => uuidv4()),
	name: text('name'),
	createdAt: text('createdAt').$default(() => moment().local().toISOString(true)),
	// createdAt: text('created_at')
	// 	.default(sql`strftime('%Y-%m-%dT%H:%M:%fZ', 'now')`)
	// 	.notNull(),
	// updatedAt: text('unpmpdated_at'),
})

export type NoteSelect = typeof note.$inferSelect


const setting = sqliteTable('setting', {
	key: text('key').primaryKey(),
	data: text('data', { mode: 'json' }),
})

export type SettingSelect = typeof setting.$inferSelect


export const schema = {
	note,
	setting,
}