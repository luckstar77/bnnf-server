
module.exports = async (ctx, next) => {

	ctx.code = 200
	ctx.body = {
		"id": 0,
		"title": "string",
		"description": "string"
	}

	ctx.code = 405
	ctx.body = {
		"code": 0,
		"type": "string",
		"message": "string"
	}
}
