module.exports = {
	mode: 'default',
	service: {
		name: 'Bananafit',
		external_url: 'http://localhost:3001',
	},
	server: {
		port: 5001,
	},
	mysql: {
		uri: 'mysql://root@localhost:3306/bananafit',
	},
	api: {
		prefix: '/api/v1',
	},
	jwt: {
		cert: '5ZzURR5ZNwa47d2P',
	},
	cache: {
		redis: {
			url: '127.0.0.1',
			port: 6379,
		},
	},
}
