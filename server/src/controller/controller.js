const express = require('express')
const {createUser, geteAllUser, updateUser, deleteUser, getUserById} = require('../service/service')
const route = express.Router()


route.get('/',  async (req, res) => {
    try {
        const data = await geteAllUser()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

route.get('/:_id',  async (req, res) => {
    try {
        const data = await getUserById(req.params._id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})


route.post('/',  async (req, res) => {
    try {
        const data = await createUser (req.body)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})


route.put('/:_id',  async (req, res) => {
    try {
        const data = await updateUser (req.params._id, req.body, req.files.picture, req.files.pdf)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

route.delete('/:_id',  async (req, res) => {
    try {
        const data = await deleteUser (req.params._id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})



module.exports = route
