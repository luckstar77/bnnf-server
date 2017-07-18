const HTTPService = require('engined-http').Service
const config = require('config')

const Service = HTTPService({
	port: config.get('server').port
})

module.exports = class extends Service {
	async setupCORS() {
		return { origin: '*' }
	}

	async setupBodyParser() {
		return {
			jsonLimit: '50mb',
			textLimit: '50mb'
		}
	}

	async setupMiddleware() {
		await this._setupMiddleware()
	}

	async listening() {
		console.log('server starting on port ' + config.get('server').port)
	}
}
