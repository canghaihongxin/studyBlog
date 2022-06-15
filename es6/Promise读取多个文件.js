const fs = require('fs')

// fs.readFile('./resources/为学.md', (err, data1) => {
//     fs.readFile('./resources/将进酒.md', (err, data2) => {
//         fs.readFile('./resources/望庐山瀑布.md', (err, data3) => {
//             let result = data1 + '\r\n' + data2 + '\r\n' + data3;
//             console.log(result)
//         });
//     });
// });

const p = new Promise(function (resolve, reject){
    fs.readFile('./resources/望庐山瀑布.md', (err, data3) => {
        resolve(data3)
    });
})

p.then(value => {
    return new Promise(function (resolve,reject){
        fs.readFile('./resources/为学.md', (err, data) => {
            resolve([value,data])
        });
    })
}).then(value => {
    return new Promise(function (resolve, reject){
        fs.readFile('./resources/为学.md', (err, data) => {
            value.push(data)
            resolve(value)
        });
    })
}).then(value => {
    console.log(value.join('\r\n'))
})


const promiseCatch = new Promise(function (resolve, reject){
    reject("出错误了")
})

promiseCatch.catch(function (reason) {
    console.log(reason)
})
