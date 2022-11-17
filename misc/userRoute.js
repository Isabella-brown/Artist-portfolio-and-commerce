const router = require('express').Router()
const userController = require('../../misc/userController')


router.get('/', (req, res) => {
    res.send({
        message: 'working'
    })
})

router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router 