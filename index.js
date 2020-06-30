const express = require('express')
const app = express()
const cors = require('cors')

// 处理客户端post请求参数
// for parsing application/json
app.use(express.json()) 
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) 

// 设置跨域
app.use(cors())

// 监听端口
app.listen(8888,() => {
    console.log('running...')
})

// 设置路由
app.get('/data',(req,res) => {
    res.send('hello')
})