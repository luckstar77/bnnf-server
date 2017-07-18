const models = require('../models')

module.exports = async (ctx, next) => {
	await models.user.deleteById(ctx)
	ctx.status = 200
}
