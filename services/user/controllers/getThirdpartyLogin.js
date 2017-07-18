const models = require('../models')
const auth = require('../../core/auth')
const _ = require('lodash')

module.exports = async (ctx, next) => {
	let users = (await models.user.checkLoginWithThirdParty(ctx))[0]

	if (users.length === 0) {
		ctx.status = 404
		return
	}

	let res = users.map(item => {
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
		return elment
	})[0]

	res.auth = await auth.generateJwtToken({
		id: res.id,
		type: res.type,
		status: res.status,
	})

	ctx.status = 200
	ctx.body = res
}
