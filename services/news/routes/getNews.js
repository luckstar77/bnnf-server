
module.exports = async (ctx, next) => {

	ctx.code = 200
	ctx.body = [
		{
			"id": 0,
			"photoUrl": "string",
			"title": "string",
			"description": "string",
			"createAt": 0,
			"updateAt": 0,
			"type": 0
		}
	]

	ctx.code = 405
	ctx.body = {
		"code": 0,
		"type": "string",
		"message": "string"
	}
}
