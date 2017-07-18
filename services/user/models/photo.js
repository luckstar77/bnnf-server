const constants = require('../constants')

let photo = exports

photo.getPhotos = async (ctx, photos) => {
	const mysql = ctx.enginedContext.get('MySQL')['default']

	let sql = 'SELECT * FROM Photo WHERE id IN ('
	let data = []
	photos.forEach(item => {
		data.push(item.id)
		sql += ` ?,`
	})
	sql = sql.substring(0, sql.length - 1)
	sql += ')'
	let query = await mysql.query(sql, data)
	return query
}
