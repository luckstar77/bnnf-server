const models = require('../models')
const auth = require('../../core/auth')
const _ = require('lodash')

module.exports = async (ctx, next) => {
	if (!_.isUndefined(ctx.request.body.photos)) {
		ctx.request.body.photos = (await models.photo.getPhotos(
			ctx,
			ctx.request.body.photos,
		))[0]
	}
	await models.user.postUser(ctx)
	ctx.status = 201
}
