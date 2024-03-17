const express = require('express')
const router = express.Router()
const { handleGetAllUsers, handleCreateNewUser, handleDeleteUser } = require('../controllers/user.controller')

router.get('/users', handleGetAllUsers)
router.post('/users', handleCreateNewUser)
router.delete('/users/:id', handleDeleteUser)


module.exports = router