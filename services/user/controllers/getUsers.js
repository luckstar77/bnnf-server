const models = require('../models')
const _ = require('lodash')

module.exports = async (ctx, next) => {
	let users = (await models.user.getUsers(ctx))[0]

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
				elment[key] = JSON.parse(elment[key])
			}
		})

		return elment
	})

	ctx.status = 200
	ctx.body = res
}
