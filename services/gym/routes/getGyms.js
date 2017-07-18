
module.exports = async (ctx, next) => {

	ctx.code = 200
	ctx.body = [
		{
			"id": 0,
			"name": "string",
			"photoUrl": "string",
			"overview": "string",
			"businessHours": "string",
			"address": "string",
			"phone": "string",
			"website": "string",
			"longitude": 0,
			"latitude": 0,
			"tags": [
				"string"
			],
			"facilities": [
				"string"
			]
		}
	]

	ctx.code = 405
	ctx.body = {
		"code": 0,
		"type": "string",
		"message": "string"
	}
}
