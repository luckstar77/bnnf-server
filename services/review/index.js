const RouterService = require('engined-http').RouterService;
const config = require('config');
const router = require('koa-router')({
  prefix: config.api.prefix,
});
const routes = require('./routes');

router.get('/reviews', routes.getReviews);

router.post('/review/report', routes.postReviewReport);

router
  .get('/review', routes.getReview)
  .post('/review', routes.postReview)
  .put('/review', routes.putReview);

module.exports = class extends RouterService() {
  async setupRoutes() {
    return router;
  }
};
