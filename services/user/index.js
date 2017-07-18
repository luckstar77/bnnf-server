const RouterService = require('engined-http').RouterService
const config = require('config')
const router = require('koa-router')({
	prefix: config.api.prefix,
})
const controllers = require('./controllers')
const middleware = require('./middleware')
router
	.post(
		'/thirdparty/login',
		middleware.validationParameterThirdpartyLogin,
		controllers.getThirdpartyLogin,
	)
	.get(
		'/users',
		middleware.validationParameterUsers,
		middleware.checkAuthorization,
		controllers.getUsers,
	)
	.post(
		'/user/login',
		middleware.validationParameterLogin,
		controllers.postUserLogin,
	)
	.get(
		'/user/featureCoachs',
		middleware.validationParameterFeatureCoachs,
		middleware.checkAuthorization,
		controllers.getUserFeatureCoachs,
	)
	.get(
		'/user/:userId',
		middleware.validationPath,
		middleware.checkAuthorization,
		controllers.getUserUserId,
	)
	.put(
		'/user/:userId',
		middleware.validationPath,
		middleware.validationPutUser,
		middleware.checkAuthorization,
		middleware.validationPermissionWithAdminOrMySelf,
		controllers.putUserUserId,
	)
	.delete(
		'/user/:userId',
		middleware.validationPath,
		middleware.checkAuthorization,
		middleware.validationPermissionWithAdmin,
		controllers.deleteUserUserId,
	)
	.get(
		'/user/:userId/favorites',
		middleware.validationPath,
		middleware.checkAuthorization,
		controllers.getUserUserIdFavorites,
	)
	.post(
		'/user/:userId/favorite',
		middleware.validationPath,
		middleware.validationParameterPostFavorite,
		middleware.checkAuthorization,
		controllers.postUserUserIdFavorite,
	)
	.post('/user', controllers.postUser)

module.exports = class extends RouterService() {
	async setupRoutes() {
		return router
	}
}
