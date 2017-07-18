const config = require('config')
const { Manager } = require('engined')

console.log("work in " + config.get('mode') + " mode.")

const main = async () => {

	// Create manager
	let serviceManager = new Manager({ verbose: true })

	// Load services
	let services = require('./services')
	await serviceManager.loadServices(services)

	// Start all services
	await serviceManager.startAll()
}

main()
