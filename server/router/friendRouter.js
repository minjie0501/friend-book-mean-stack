const express = require('express')
const router = express.Router()
const {Friend} = require('../model/Friend')
const mongoose = require('mongoose')

router.get('/all', async(req,res) => {
    const friends = await Friend.find()
    res.send(friends)

})

router.post('/add', async(req,res) => {
    const {firstName, lastName, phone, email, bestFriend}= req.body
    const friend = await Friend.create({
        firstName,
        lastName,
        phone,
        email,
         bestFriend
    })
    res.status(200).send({message: "Friend added"})
})

module.exports = router