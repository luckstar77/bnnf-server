let favorite = exports

const constants = require('../constants')

favorite.getFavorites = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'SELECT User.* FROM Favorite JOIN User ON Favorite.coachId = User.id WHERE Favorite.userId = ?',
		[ctx.params.userId],
	)
	return query
}

favorite.addFavorite = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'INSERT INTO Favorite (coachId, userId) VALUES (?,?)',
		[ctx.request.body.coachId, ctx.me.id],
	)
	return query
}
