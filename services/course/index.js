const RouterService = require('engined-http').RouterService
const config = require('config')
const router = require('koa-router')({
	prefix: config.api.prefix,
})
const routes = require('./routes')

router
	.get('/courses', routes.getCourses)
	.post('/course', routes.postCourse)
	.put('/course', routes.putCourse)
	.get('/course/:courseId', routes.getCourseCourseId)
	.delete('/course/:courseId', routes.deleteCourseCourseId)

module.exports = class extends RouterService() {
	async setupRoutes() {
		return router
	}
}
