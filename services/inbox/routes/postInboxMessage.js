module.exports = async (ctx, next) => {
	ctx.code = 200
	ctx.body = {
		id: 'string',
		inboxId: 'string',
		userId: 'string',
		message: 'string',
		type: 0,
		createAt: 0,
	}
}
