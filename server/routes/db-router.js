const express = require('express')

const DbCtrl = require('../controllers/db-ctrl')

const router = express.Router()

router.get('/users', DbCtrl.getUsers)
router.get('/cities', DbCtrl.getCities)

module.exports = router