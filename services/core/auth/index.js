const jwt = require('jsonwebtoken')
const config = require('config')

let auth = exports

auth.generateJwtToken = async member => {
	let secret = config.get('jwt.cert')

	return jwt.sign(
		{
			data: member,
		},
		secret,
		{expiresIn: 90 * 24 * 60 * 60},
		{algorithm: 'HS512'},
	)
}

auth.verifyJwtToken = async token => {
	let secret = config.get('jwt.cert')

	try {
		var decoded = jwt.verify(token, secret)
		return {
			status: true,
			decoded: decoded,
		}
	} catch (err) {
		return {
			status: false,
			err: err,
		}
	}
}

// TODO: test accountkit
// auth.checkAccountKit = async (ctx, next) => {
// 	let accesstoken = ctx.body.thirdPartyToken
// 	fetch('https://graph.accountkit.com/v1.2/me/?access_token=' + accesstoken)
// 		.then(function(res) {
// 			return res.text()
// 		})
// 		.then(function(body) {
// 			var temp = JSON.parse(body)
// 			req.body.phone = temp.phone.national_number
// 			next()
// 		})
// 		.catch(() => {
// 			ctx.status = 401
// 		})
// }
