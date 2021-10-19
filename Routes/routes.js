const express = require('express')
const router = express.Router()
const logger =require('../logger')

const {create} =require('./create')
const {findall,delet,findone,update,findbyquery} =require('./mail2')

router.post('/api/tasks/create',create)
router.get('/api/tasks/findall',findall)
router.delete('/api/tasks/delet/:id',delet)
router.get('/api/tasks/findone/:id',findone)
router.patch('/api/tasks/update/:id',update)
router.get('/api/tasks/findbyquery',findbyquery)

module.exports = router
