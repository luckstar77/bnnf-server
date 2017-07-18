const models = require('../models')
const _ = require('lodash')

module.exports = async (ctx, next) => {
	let coachFeatureList = (await models.coachFeature.getCoachFeatureList(ctx))[0]

	let res = coachFeatureList.map(item => {
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
