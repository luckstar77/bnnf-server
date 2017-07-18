const redisClient = require('redis')
const config = require('config')

exports.redis = redisClient.createClient(
	config.get('cache.redis.port'),
	config.get('cache.redis.url'),
)
