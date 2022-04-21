const express = require('express')
const User = require('../model/User')
const router = express.Router()

// 获取用户列表
router.get('/', async (req, res) => {
    //res.send('hello expression')
     const list = await User.find()
     res.send(list)
})

//注册
router.post('/register', async (req, res) => {
    const user =await User.findOne({account: req.body.account})
    if(user){ return res.status(409).send('该用户已存在')}

    const newUser = await new User(req.body).save()
    res.send(newUser)
    
})

//登录
router.post('/login', async (req,res)=>{
    const user =await User.findOne({account: req.body.account})
    if(!user){ return res.status(422).send('用户不存在！')}

    if(req.body.password !== user.password){
        return res.status(422).send('密码错误！')
    }else{
        res.send('token')
    }
})

module.exports = router