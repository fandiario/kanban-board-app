const bcrypt = require ("bcryptjs")
const { generateToken } = require("../helpers/jwt")
const { User } = require ("../models")
const {valid} = require ("../helpers/bcrypt")

class UserController {
    static registerUser (req, res) {
        let params = {
            email: req.body.email,
            password: req.body.password,
            organization: "Hacktiv8"
        }

        User.create (params)

        .then (data => {
            res.status (201).json (data)
        })

        .catch (err => {
            console.log (err)
            return res.status (500).json ({message : "Internal Server Error"})
        })
    }

    static loginUser (req, res) {
        let params = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne ({
            where: {email: params.email}
        })

        .then (data => {
            if (!data) {
                return res.status (400).json ({message: "Invalid Email or Password"})
            }
            return data
        })

        .then (data => {
            console.log (params.password, data.password)
            const validPassword = valid (params.password, data.password)

            if (validPassword) {
                let payload = {id: data.id, email: data.email, organization:data.organization}

                let access_token = generateToken (payload)

                return res.status (200).json ({access_token})

            } else {
                return res.status (400).json ({message: "Invalid Email or Password"})
            }
        })

        .catch (err => {
            console.log (err)
            return res.status (500).json ({message : "Internal Server Error"})
        })

    }

    static getUser (req, res) {
        User.findAll ()

        .then (data => {
            return res.status (200).json(data) 
        })

        .catch (err => {
            console.log (err)
            return res.status (404).json ({message: "Data not found"})
        })
    }

    static getUserbyId (req, res) {
        User.findByPk (req.params.id)

        .then (data => {
            return res.status (200).json (data)
        })

        .catch (err => {
            console.log (err)
            return res.status (404).json ({message: "Data not found"})
        })
    }

    static editUser (req, res) {
        let salt = bcrypt.genSaltSync (10)
        let hash = bcrypt.hashSync (req.body.password, salt)

        let payload = {
            email: req.body.email,
            password: hash,
            organization: req.body.organization
        }

        User.update (payload, {
            where: {id: req.params.id}
        })

        .then (data => {
            if (!data) {
                return res.status (404).json ({message: "Data not found"})
            
            } else {
                return res.status (200).json ({message: "Data has been updated"})
            }
        })

        .catch (err => {
            console.log (err)
            return res.status (400).json ({message: "Invalid Email or Password"})
        }) 
    }

    static deleteUser (req, res) {
        User.destroy ({
            where: {id: req.params.id}
        })

        .then (data => {
            if (!data) {
                return res.status (404).json ({message: "Data not found"})
            
            } else {
                return res.status (200).json ({message: "Data has been deleted"}) 
            }
        })

        .catch (err => {
            console.log (err)
            return res.status (500).json ({message : "Internal Server Error"})
        })
    }



}

module.exports = UserController