const RouterService = require('engined-http').RouterService
const Router = require('koa-router')

const router = Router()

const middleware = async (ctx, next) => {
	if (!ctx.request.query)
		ctx.throw(400, 'losed your payload')

	let query = ctx.request.query
	let accessToken = ctx.request.query.accessToken
	let refreshToken = ctx.request.query.refreshToken

	const Middleware = ctx.enginedContext.get('Permission').middleware

	// check is task or not
	let isAuthorized = await Middleware.requireAuthorized(accessToken, refreshToken)
	if (!isAuthorized) {
		ctx.body = {
			status: 'error',
			type: 'permission denial'
		}
		return
	}

	// check tasks permission
	if (!isAuthorized.permissions.admin) {
		ctx.body = {
			status: 'error',
			type: 'permission denial'
		}
		return
	}else {
		return next()
	}
}

const exists = async (ctx, fields) => {
	let Mysql = ctx.enginedContext.get('MySQL')['default']
	let task = await Mysql.model('Task').findOne(fields)

	if (!task)
        return false

    return true
}

router.get('/api/v1/admin/rewards/list/all', async (ctx, next) => {
	// let query = ctx.request.query
	// var taskid = this.props.match.params.id  -> /api/v1/admin/rewards/list/all/:id


	let exits = await exists(ctx, fields)
    if (exits) {
		ctx.status = 401
		ctx.body = {
			status: 'error',
			type: 'task exits'
		}

		return
	}

	let Mysql = ctx.enginedContext.get('MySQL')['default']
	let data = await Mysql.query('SELECT * FROM `test` WHERE `disable` = ?', [ 1 ])

	ctx.body = {
		status: 'success',
		rewards: data[0]
	}
})

router.post('/api/v1/admin/task/create', middleware, async (ctx, next) => {
	if (!ctx.request.body)
		ctx.throw(400, 'losed your payload')

	var payload = ctx.request.body

	let result = await new Promise((resolve) => {

		// ........

	})

	ctx.body = {
		status: 'success'
	}
})

module.exports = class extends RouterService() {
	async setupRoutes() {
		return router
	}
}
