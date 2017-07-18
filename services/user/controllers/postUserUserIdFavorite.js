const models = require('../models')
const _ = require('lodash')

module.exports = async (ctx, next) => {
	try {
		await models.favorite.addFavorite(ctx)
		ctx.status = 200
	} catch (err) {
		ctx.status = 500
	}
	return
}
