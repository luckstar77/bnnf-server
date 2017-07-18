const _ = require('lodash')
let constants = exports

constants.gender = {
	FEMALE: 0,
	MALE: 1,
}

constants.type = {
	USER: 0,
	COACH: 1,
	ADMIN: 2,
}

constants.status = {
	BLOCK: -1,
	INACTIVE: 0,
	IN_PROGRESS: 1,
	ACTIVE: 2,
}

constants.func = {
	INT: _.isInteger,
	STRING: _.isString,
	ARRAY: _.isArray,
	OBJECT: _.isObject,
}
