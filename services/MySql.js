const config = require('config')
const path = require('path')
const mysql = require('engined-mysql')

const MySql = mysql({
	uri: config.get('mysql.uri')
})

module.exports = MySql
