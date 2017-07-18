let user = exports

const constants = require('../constants')
const _ = require('lodash')

user.struct = {
	id: constants.func.INT,
	username: constants.func.STRING,
	email: constants.func.STRING,
	password: constants.func.STRING,
	protocol: constants.func.STRING,
	phone: constants.func.STRING,
	overview: constants.func.STRING,
	experience: constants.func.STRING,
	promoCode: constants.func.STRING,
	promoedCode: constants.func.STRING,
	socialSecurityNumber: constants.func.STRING,
	identityCardPhotoUrl: constants.func.STRING,
	accountKitId: constants.func.STRING,
	accountKitToken: constants.func.STRING,
	avgRating: constants.func.INT,
	totalRatings: constants.func.INT,
	gender: constants.func.INT,
	type: constants.func.INT,
	status: constants.func.INT,
	longitude: constants.func.INT,
	latitude: constants.func.INT,
	enableNotification: constants.func.INT,
	photos: constants.func.ARRAY,
	professions: constants.func.ARRAY,
	specialities: constants.func.ARRAY,
	certifications: constants.func.ARRAY,
	coachFeatures: constants.func.ARRAY,
	bankAccounts: constants.func.ARRAY,
	createAt: constants.func.INT,
	updateAt: constants.func.INT,
}

user.getUsers = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'SELECT * FROM `User` WHERE `type` = ? AND `status` = ? AND `id` <> ?',
		[constants.type['COACH'], constants.status['ACTIVE'], ctx.me.id],
	)
	return query
}

user.getUser = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'SELECT * FROM `User` WHERE `status` = ? AND `id` = ?',
		[constants.status['ACTIVE'], ctx.params.userId],
	)
	return query
}

user.putUser = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']

	let sql = 'UPDATE User SET'
	Object.keys(ctx.request.body).forEach(key => {
		let val = ctx.request.body[key]
		if (_.isUndefined(user.struct[key])) {
			return
		}
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
			val = JSON.stringify(ctx.request.body[key])
		}
		sql += ` ${key} = '${val}',`
	})
	sql = sql.substring(0, sql.length - 1) + ' WHERE id = ?'

	let query = await mysql.query(sql, ctx.params.userId)
	return query
}

user.postUser = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']

	let sql = 'INSERT INTO User ('
	let data = []
	let lastSQL = ' ) VALUES ('
	Object.keys(ctx.request.body).forEach(key => {
		let val = ctx.request.body[key]
		if (_.isUndefined(user.struct[key])) {
			return
		}
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
			val = JSON.stringify(ctx.request.body[key])
		}
		data.push(val)
		sql += ` ${key},`
		lastSQL += ' ?,'
	})
	sql = sql.substring(0, sql.length - 1)
	lastSQL = lastSQL.substring(0, lastSQL.length - 1)
	sql += lastSQL + ')'
	let query = await mysql.query(sql, data)
	return query
}

user.checkLogin = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'SELECT * FROM `User` WHERE `email` = ? AND `password` = ?',
		[ctx.request.body.email, ctx.request.body.password],
	)
	return query
}

user.checkLoginWithThirdParty = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query(
		'SELECT * FROM `User` WHERE `accountKitId` = ? AND `accountKitToken` = ?',
		[ctx.request.body.thirdPartyId, ctx.request.body.thirdPartyToken],
	)
	return query
}

user.deleteById = async ctx => {
	const mysql = ctx.enginedContext.get('MySQL')['default']
	let query = await mysql.query('DELETE FROM `User` WHERE `id` = ?', [
		ctx.params.userId,
	])
	return query
}
