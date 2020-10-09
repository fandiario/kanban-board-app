const router = require ("express").Router ()
const UserController = require ("../controllers/UserController.js")

router.post ("/register", UserController.registerUser)
router.post ("/login", UserController.loginUser)

router.get ("/all", UserController.getUser)
router.get ("/:id",UserController.getUserbyId)

router.put ("/:id", UserController.editUser)
router.delete ("/:id", UserController.deleteUser)


module.exports = router