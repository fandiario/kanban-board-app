const {User} = require ("../models")

const authorization = (req, res, next) => {
    const {id} = req.UserData

    User.findByPk (id)

    .then (data => {
        if (data && data.organization === req.UserData.organization) {
            next ()
        } else {
            return res.status (403). json ({ message: "Unauthorized Access"})
        }
    })

    .catch (err => {
        console.log (err)
        return res.status (403). json ({ message: "Unauthorized Access"})
    })
}

module.exports = {authorization}