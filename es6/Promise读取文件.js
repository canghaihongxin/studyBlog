const fs = require('fs')

// 2. 读取文件
// fs.readFile('./为学.md', (err, data) => {
//     //如果读取失败则抛出异常
//     if (err) throw err
// //    如果没有错误则输出内容
//     console.log(data.toString())
//
// })

// 使用promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile("./为学.mda", (err, data) => {
        // 判断如果失败
        if (err) reject(err)
        // 如果成功
        resolve(data)
    })
})

p.then(function (value) {
    console.log(value.toString())
}, function (reason) {
    console.log(reason)
    console.log("读取失败")
})
