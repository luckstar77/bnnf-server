const RouterService = require('engined-http').RouterService
const config = require('config')
const router = require('koa-router')({
  prefix: config.api.prefix,
})
const routes = require('./routes')

router.put('/journal/:journalid', routes.putJournal)
router.get('/journals', routes.getJournals)
router.post('/journal', routes.postJournal)

router
    .post('/journal/exercise', routes.postJournalExercise)
    .del('/journal/exercise', routes.delJournalExercise)

module.exports = class extends RouterService() {
  async setupRoutes() {
    return router
  }
}
