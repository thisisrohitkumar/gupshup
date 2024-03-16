const express = require('express')
const router = express.Router()
const { handleGetAllUsers, handleCreateNewUser } = require('../controllers/user.controller')

router.get('/users', handleGetAllUsers)
router.post('/users', handleCreateNewUser)

module.exports = router