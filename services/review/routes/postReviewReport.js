
module.exports = async (ctx, next) => {

	ctx.code = 405
	ctx.body = {
		"code": 0,
		"type": "string",
		"message": "string"
	}
}
