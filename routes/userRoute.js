const express = require('express') // untuk memuat router
const userControl = require('../controllers/userController')

const router = express.Router()

router.get('/',userControl.getAllBooks)
router.get('/:code',userControl.getBookByCode)

module.exports = router