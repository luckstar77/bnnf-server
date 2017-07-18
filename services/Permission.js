const RouterService = require('engined-http').RouterService

module.exports = class extends RouterService() {
    async initialize() {
		this.getContext().set('Permission', {
            middleware: {
                requireAuthorized: async (accessToken, refreshToken) => {
                    // var Utils = this.getContext().get('Utils')
                    // var res = await Utils.verifyJwtToken(accessToken)

                    // if (res.status == 'success') {
                    //     return res.decoded
                    // }else {
                    //     return false
                    // }

                    return
    			}
            },
            somefunction: async () => {

            }
		})
	}

	async uninitialize() {
		this.getContext().set('Permission');
	}
}
