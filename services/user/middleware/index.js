const auth = require('../../core/auth')
const _ = require('lodash')
const constants = require('../constants')
const models = require('../models')

let middleware = exports

middleware.checkAuthorization = async (ctx, next) => {
	let authorization = ctx.headers['authorization']

	if (_.isUndefined(authorization) || _.isEmpty(authorization)) {
		ctx.status = 400
		return
	}

	let verifyData = await auth.verifyJwtToken(authorization)
	if (!verifyData.status || Date.now() / 1000 > verifyData.decoded.exp) {
		ctx.status = 401
		return
	}
	ctx.me = verifyData.decoded.data

	return next()
}

middleware.validationParameterUsers = async (ctx, next) => {
	let authorization = ctx.headers['authorization']
	let type = ctx.query['type']
	let isPassed = false

	if (_.isUndefined(type) || _.isUndefined(authorization)) {
		ctx.status = 400
		return
	}

	Object.keys(constants.type).forEach(key => {
		if (constants.type[key] == type) {
			isPassed = true
		}
	})

	if (isPassed) {
		return next()
	}
	ctx.status = 400
	return
}

middleware.validationPath = async (ctx, next) => {
	let userId = ctx.params.userId

	if (_.isUndefined(userId)) {
		ctx.status = 400
		return
	}
	return next()
}

middleware.validationPutUser = async (ctx, next) => {
	let body = ctx.request.body
	let isPassed = true

	Object.keys(models.user.struct).forEach(key => {
		if (!_.isUndefined(body[key]) && !models.user.struct[key](body[key])) {
			isPassed = false
			return
		}
	})
	;[('gender', 'type', 'status')].forEach(item => {
		if (!_.isUndefined(body[item])) {
			let checked = false
			Object.keys(constants[item]).forEach(key => {
				if (constants[item][key] == body[item]) {
					checked = true
				}
			})
			if (!checked) {
				isPassed = false
				return
			}
		}
	})

	if (isPassed) {
		return next()
	}

	ctx.status = 400
	return
}

middleware.validationParameterLogin = async (ctx, next) => {
	let isPassed = true
	;['email', 'password'].forEach(key => {
		if (
			_.isUndefined(ctx.request.body[key]) ||
			!_.isString(ctx.request.body[key])
		) {
			isPassed = false
			return
		}
	})
	if (isPassed) {
		return next()
	} else {
		ctx.status = 400
	}
	return next()
}

middleware.validationParameterThirdpartyLogin = async (ctx, next) => {
	let isPassed = true
	;['thirdPartyId', 'thirdPartyToken'].forEach(key => {
		if (
			_.isUndefined(ctx.request.body[key]) ||
			!_.isString(ctx.request.body[key])
		) {
			isPassed = false
			return
		}
	})
	;['protocol', 'accountType'].forEach(key => {
		if (
			_.isUndefined(ctx.request.body[key]) ||
			!_.isInteger(ctx.request.body[key])
		) {
			isPassed = false
			return
		}
	})
	if (isPassed) {
		return next()
	} else {
		ctx.status = 400
	}
}

middleware.validationPermissionWithAdminOrMySelf = async (ctx, next) => {
	let authorization = ctx.headers['authorization']
	let userId = ctx.params.userId
	if (ctx.me.type == constants.type.ADMIN || ctx.me.id == userId) {
		return next()
	}
	ctx.status = 401
	return
}

middleware.validationPermissionWithAdmin = async (ctx, next) => {
	let authorization = ctx.headers['authorization']
	let userId = ctx.params.userId
	if (ctx.me.type == constants.type.ADMIN) {
		return next()
	}
	ctx.status = 401
	return
}

middleware.validationParameterPostFavorite = async (ctx, next) => {
	let isPassed = true
	;['coachId'].forEach(key => {
		if (
			_.isUndefined(ctx.request.body[key]) ||
			!_.isInteger(ctx.request.body[key])
		) {
			isPassed = false
			return
		}
	})
	if (isPassed) {
		return next()
	}
	ctx.status = 400
	return
}

middleware.validationParameterFeatureCoachs = async (ctx, next) => {
	let authorization = ctx.headers['authorization']
	let type = ctx.query['type']
	let isPassed = false

	if (_.isUndefined(type) || _.isUndefined(authorization)) {
		ctx.status = 400
		return
	}

	Object.keys(constants.type).forEach(key => {
		if (constants.type[key] == type) {
			isPassed = true
		}
	})

	if (!isPassed) {
		ctx.status = 400
		return
	}

	return next()
}
