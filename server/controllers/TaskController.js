const {Task} = require ("../models")

class TaskController {
    static getTask (req, res) {
        Task.findAll ()

        .then (data => {
            return res.status (200).json (data)
        })

        .catch (err => {
            console.log (err)
            return res.status (500).json ({message: "Internal Server Error"})
        })

    }

    static addTask (req, res) {
        let params = {
            title: req.body.title,
            description: req.body.description,
            category: "todo",
            UserId: req.UserData.id
        }

        Task.create (params)

        .then (data => {
            return res.status (201).json (data)
        })

        .catch (err => {
            console.log (err)
            return res.status (400).json ({message : "Bad Request - Error Validation"})
        })
    }

    static getTaskById (req, res) {
        Task.findByPk (req.params.id)

        .then (data => {
            return res.status (200).json (data)
        })

        .catch (err => {
            console.log (err)
            return res.status (404).json ({message: "Data not found"})
        })
        
    }

    static editTask (req, res) {
        let params = {
            title: req.body.title,
            description: req.body.description,
        }
        
        Task.update (params, {
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
            return res.status (400).json ({message : "Bad Request - Error Validation"})
        })
    }

    static moveTask (req, res) {
        let params = {
            category: req.body.category,
        }

        Task.update (params, {
            where: {id: req.params.id}
        })

        .then (data => {
            if (!data) {
                return res.status (404).json ({message: "Data not found"})

            } else {
                return res.status (200).json ({message: "Data has been moved"})
            }
        })

        .catch (err => {
            console.log (err)
            return res.status (400).json ({message : "Bad Request - Error Validation"})
        })
        
    }

    static deleteTask (req, res) {
        Task.destroy ({
            where: {id: req.params.id}
        })

        .then (data => {
            return res.status (200).json ({message: "Data has been deleted"})
        })
        
        .catch (err => {
            console.log (err)
            return res.status (500).json ({message : "Internal Server Error"})
        })
    }

    

}

module.exports = TaskController