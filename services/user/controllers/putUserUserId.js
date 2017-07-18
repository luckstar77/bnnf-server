const models = require('../models')
const _ = require('lodash')

module.exports = async (ctx, next) => {
	if (!_.isUndefined(ctx.request.body.photos)) {
		ctx.request.body.photos = (await models.photo.getPhotos(
			ctx,
			ctx.request.body.photos,
		))[0]
	}
	await models.user.putUser(ctx)

	let user = (await models.user.getUser(ctx))[0]

	if (user.length === 0) {
		ctx.status = 404
		return
	}

	let res = user.map(item => {
		let elment = item
		Object.keys(elment).forEach(key => {
			if (
				[
					'photos',
					'professions',
					'specialities',
					'certifications',
					'coachFeatures',
					'bankAccounts',
				].indexOf(key) !== -1
			) {
				if (!_.isEmpty(elment[key])) {
					elment[key] = JSON.parse(elment[key])
				}
			}
		})
		elment.updateTime = new Date().toISOString().slice(0, 19).replace('T', ' ')
		return elment
	})[0]

	ctx.status = 200
	ctx.body = res
}
