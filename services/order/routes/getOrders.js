module.exports = async (ctx, next) => {
	ctx.code = 200
	ctx.body = [
		{
			"id": 0,
			"seller": {
				"id": 0,
				"username": "string",
				"email": "string",
				"phone": "string",
				"overview": "string",
				"experience": "string",
				"promoCode": "string",
				"promoedCode": "string",
				"socialSecurityNumber": "string",
				"identityCardPhotoUrl": "string",
				"accountKitId": "string",
				"accountKitToken": "string",
				"avgRating": 0,
				"totalRatings": 0,
				"gender": 0,
				"type": 0,
				"status": 0,
				"longitude": 0,
				"latitude": 0,
				"enableNotification": true,
				"photos": [
					{
						"id": 0,
						"url": "string",
						"createAt": 0
					}
				],
				"professions": [
					"string"
				],
				"specialities": [
					"string"
				],
				"certifications": [
					"string"
				],
				"coachFeatures": [
					0
				],
				"bankAccounts": [
					{
						"id": 0,
						"routingNumber": "string",
						"accountNumber": "string",
						"bankBookPhotoUrl": "string"
					}
				],
				"createAt": 0,
				"updateAt": 0
			},
			"buyer": {
				"id": 0,
				"username": "string",
				"email": "string",
				"phone": "string",
				"overview": "string",
				"experience": "string",
				"promoCode": "string",
				"promoedCode": "string",
				"socialSecurityNumber": "string",
				"identityCardPhotoUrl": "string",
				"accountKitId": "string",
				"accountKitToken": "string",
				"avgRating": 0,
				"totalRatings": 0,
				"gender": 0,
				"type": 0,
				"status": 0,
				"longitude": 0,
				"latitude": 0,
				"enableNotification": true,
				"photos": [
					{
						"id": 0,
						"url": "string",
						"createAt": 0
					}
				],
				"professions": [
					"string"
				],
				"specialities": [
					"string"
				],
				"certifications": [
					"string"
				],
				"coachFeatures": [
					0
				],
				"bankAccounts": [
					{
						"id": 0,
						"routingNumber": "string",
						"accountNumber": "string",
						"bankBookPhotoUrl": "string"
					}
				],
				"createAt": 0,
				"updateAt": 0
			},
			"course": {
				"id": 0,
				"coachId": 0,
				"photos": [
					{
						"id": 0,
						"url": "string",
						"createAt": 0
					}
				],
				"title": "string",
				"description": "string",
				"specialities": [
					"string"
				],
				"address": "string",
				"price": 0,
				"discount": 0,
				"isBooking": true,
				"startAt": 0,
				"endAt": 0,
				"createAt": 0
			},
			"transaction": {
				"id": 0,
				"orderId": 0,
				"taxes": 0,
				"invoiceType": 0,
				"uniform": "string",
				"payDateAt": 0,
				"payAmount": 0,
				"status": 0,
				"createAt": 0
			},
			"attendStatus": 0,
			"promoCode": "string",
			"createAt": 0,
			"updateAt": 0,
			"status": 0
		}
	]

	ctx.code = 405
	ctx.body = {
		"code": 0,
		"type": "string",
		"message": "string"
	}
}
