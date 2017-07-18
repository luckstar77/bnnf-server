module.exports = async (ctx, next) => {
	ctx.code = 200
	ctx.body = {
		id: 'string',
		photoUrl: 'string',
		url: 'string',
	}
}
