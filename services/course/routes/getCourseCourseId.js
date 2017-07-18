module.exports = async (ctx, next) => {
	ctx.code = 200
	ctx.body = {
		id: 'string',
		coachId: 'string',
		photos: [
			{
				id: 'string',
				url: 'string',
				createAt: 0,
			},
		],
		title: 'string',
		description: 'string',
		speciality: {
			id: 'string',
			name: 'string',
			photoUrl: 'string',
		},
		address: 'string',
		price: 0,
		discount: 0,
		isBooking: true,
		startAt: 0,
		endAt: 0,
		createAt: 0,
	}
}
