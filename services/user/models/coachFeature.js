let coachFeature = exports

const constants = require('../constants')

coachFeature.getCoachFeatureList = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'SELECT User.* FROM CoachFeature JOIN User ON CoachFeature.coachId = User.id WHERE CoachFeature.type = ?',
		[ctx.request.query.type],
	)
	return query
}
