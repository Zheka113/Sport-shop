const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const authRouter = require('./authRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/user', authRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/item', itemRouter)

module.exports = router;