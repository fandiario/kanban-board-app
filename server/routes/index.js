const router = require ("express").Router ()
const UserRoute = require ("./UserRoute.js")
const TaskRoute = require ("./TaskRoute.js")

router.get('/', (req, res) => {
    res.send('Test!')
  })

  router.use ("/users", UserRoute)
  router.use ("/tasks",TaskRoute)

module.exports = router