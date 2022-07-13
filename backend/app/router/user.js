const express = require('express')
const User = require('../model/User')
const router = express.Router()
// const shananxi = await User.count({"province":"陕西省"})
//获取省份个数
// router.get('/shananxi', async (req, res) => {
//     // res.send('hello expression')

//     // res.send(User.find({account: "louie"}))
//     const data = await User.count()
//     res.send(data)
// })

// 稍后执行查询，并通过 callback 获取查询结果
// router.get('/usernumber',  (req, res) => {
//     const query =  User.find()
//     query.count().exec(function(err, number))
//     // query.count().exec(function (err, number) {
//     //     // if (err) return handleError(err)
//     //     // res.send('%d',number)
//     //     console.log(number)
//     //   })
//     console.log(number)
// })

router.get("/usernumber",async function(req,res){
    let usernumber = await User.find().count();
    // let MostProvince = await User.find("").count();
    res.json({
        count: usernumber
    })
})

router.get('/', async (req, res) => {
     const list = await User.find()
     res.send(list)
})

//注册
router.post('/register', async (req, res) => {
    const user =await User.findOne({account: req.body.account})
    if(user){ return res.status(409).send('该用户已存在')}
    const newUser = await new User(req.body).save()
    res.send('新用户已创建')   
})

//登录
router.post('/login', async (req,res)=>{
    const user =await User.findOne({account: req.body.account})
    if(!user){ return res.status(421).send('用户不存在！')}
    if(req.body.password !== user.password){
        return res.status(422).send('密码错误！')
    }else{
        res.send('登录')
    }
})

module.exports = router