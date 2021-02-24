const express = require('express')
const router = express.Router()
const courseController = require('../controllers/upload.controller')

router.get('/', courseController.log)
router.post('/', courseController.create)

module.exports = router
