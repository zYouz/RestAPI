const express = require ('express')

const router = express.Router()
const User = require('../models/User')

router.get('/allusers',(req,res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.post('/newuser',(req,res)=>{
    const newUser = new User(req.body)
    newUser.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.put('/user/update/:userId',(req,res)=>{
    User.findByIdAndUpdate(req.params.userId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.delete('/user/delete/:userId',(req,res)=>{
    User.findByIdAndRemove(req.params.userId)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
module.exports = router