const router = require ("express").Router ()
const TaskController = require ("../controllers/TaskController")
const {authentication} = require ("../middlewares/authentication")
const {authorization} = require ("../middlewares/authorization")

router.get ("/", authentication, TaskController.getTask)
router.post ("/", authentication, TaskController.addTask)

router.get ("/:id", authentication, TaskController.getTaskById)

router.patch ("/:id/edit", authentication, authorization, TaskController.editTask)
router.patch ("/:id/move", authentication, authorization, TaskController.moveTask)

router.delete ("/:id", authentication, authorization, TaskController.deleteTask)


module.exports = router