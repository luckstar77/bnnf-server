const RouterService = require('engined-http').RouterService
const config = require('config')
const router = require('koa-router')({
	prefix: config.api.prefix,
})
const routes = require('./routes')

router
	.get('/inboxs', routes.getInboxs)
	.post('/inbox', routes.postInbox)
	.get('/inbox/messages', routes.getInboxMessages)
	.post('/inbox/message', routes.postInboxMessage)

module.exports = class extends RouterService() {
	async setupRoutes() {
		return router
	}
}
