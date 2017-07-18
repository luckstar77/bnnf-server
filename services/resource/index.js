const RouterService = require('engined-http').RouterService
const config = require('config')
const router = require('koa-router')({
	prefix: config.api.prefix,
})
const routes = require('./routes')

router.get('/resources', routes.getResources)

module.exports = class extends RouterService() {
	async setupRoutes() {
		return router
	}
}
