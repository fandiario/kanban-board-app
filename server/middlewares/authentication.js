const {User} = require ("../models")
const {verifyToken} = require ("../helpers/jwt")

const authentication = (req, res, next) => {
    const {access_token} = req.headers
    const data = verifyToken (access_token)

    User.findByPk (data.id)

    .then (result => {
        req.UserData = result
        next ()
    })

    .catch (err => {
        console.log (err)
        return res.status (401).json ({message: "Invalid User"})
    })

}

module.exports = {authentication}