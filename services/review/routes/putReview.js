
module.exports = async (ctx, next) => {

    ctx.code = 200
	ctx.body = [
        {
            "id": "string",
            "from": {
                "id": "string",
                "username": "string",
                "email": "string",
                "phone": "string",
                "overview": "string",
                "experience": "string",
                "promoCode": "string",
                "promoedCode": "string",
                "socialSecurityNumber": "string",
                "accountKitId": "string",
                "accountKitToken": "string",
                "avgRating": 0,
                "totalRatings": 0,
                "gender": 0,
                "type": 0,
                "status": 0,
                "recommendScore": 0,
                "longitude": 0,
                "latitude": 0,
                "enableNotification": true,
                "photos": [
                    {
                    "id": "string",
                    "url": "string",
                    "createAt": 0
                    }
                ],
                "professions": [
                    {
                    "id": "string",
                    "name": "string",
                    "photoUrl": "string"
                    }
                ],
                "specialities": [
                    {
                    "id": "string",
                    "name": "string",
                    "photoUrl": "string"
                    }
                ],
                "certifications": [
                    {
                    "id": "string",
                    "name": "string",
                    "description": "string",
                    "photoUrl": "string"
                    }
                ],
                "bankAccounts": [
                    {
                    "id": "string",
                    "routingNumber": "string",
                    "accountNumber": "string",
                    "bankBookPhotoUrl": "string"
                    }
                ],
                "createAt": 0,
                "updateAt": 0
            },
            "coachId": "string",
            "professionScore": 0,
            "courseScore": 0,
            "attitudeScore": 0,
            "comment": "string"
        }
    ]

    ctx.code = 405
	ctx.body = {
        "code": 0,
        "type": "string",
        "message": "string"
    }
}
