
module.exports = async (ctx, next) => {

	ctx.code = 200
	ctx.body = {
		"id": 0,
		"userId": 0,
		"title": "string",
		"address": "string",
		"description": "string",
		"type": 0,
		"attendStatus": 0,
		"height": 0,
		"weight": 0,
		"fat": 0,
		"muscleMass": 0,
		"bmi": 0,
		"bmr": 0,
		"photos": [
			{
				"id": 0,
				"url": "string",
				"createAt": 0
			}
		],
		"exercises": [
			{
				"id": 0,
				"title": "string",
				"description": "string"
			}
		],
		"startAt": 0,
		"endAt": 0,
		"createAt": 0,
		"updateAt": 0
	}

	ctx.code = 405
	ctx.body = {
		"code": 0,
		"type": "string",
		"message": "string"
	}
}
