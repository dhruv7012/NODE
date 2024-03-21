const express = require('express')
const frontController = require('../controllers/frontController')
const route = express.Router()


route.get('/', frontController.home)
route.get('/notHome', frontController.notHome)

route.post('/getData', frontController.someFunc)

module.exports = route