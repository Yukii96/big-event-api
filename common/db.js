// 数据库操作也是异步的，所以需要回调函数
function operateData(sql,param) {

    return new Promise((resolve,reject) => {
        // 1. 导入mysql第三方包
    const mysql = require('mysql')

    // 2. 创建一个到数据库的链接 
    const db = mysql.createConnection({
        // 数据库所在的电脑的IP地址或域名
        host: 'localhost',
        // 端口
        port: '3306',
        // 数据库名称
        database: 'big-event-api',
        // 数据库登录名
        user: 'root',
        // 数据库登录密码
        password: 'root'
    })
    // 3. 连接到数据库
    db.connect()

    // 4. 对数据库进行操作
    // sql：sql语句
    // param：表示占位符
    // result：从数据库返回来的信息
    db.query(sql,param,(err, result) => {
        // console.log(result[0].uname)
        if (err) {
            reject(err)
        } else {
            resolve(result)
        }
    })

    // 5. 关闭数据库连接
    db.end()
    })
    
}

module.exports.operateData = operateData