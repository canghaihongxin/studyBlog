const fs = require('fs')

// 读取为学
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/为学.md', (err, data) => {
            // 如果失败
            if (err) throw err
            resolve(data);
        })
    })
}

// 读取将进酒
function readQiangJinJiu() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/将进酒.md', (err, data) => {
            // 如果失败
            if (err) throw err
            resolve(data);
        })
    })
}



function readLuShan() {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/望庐山瀑布.md', (err, data) => {
            // 如果失败
            if (err) throw err
            resolve(data);
        })
    })
}


async function main(){
    let weixue = await readWeiXue();
    let jinjiu = await readQiangJinJiu();
    let pubu = await readLuShan();

    console.log(weixue.toString())
    console.log(jinjiu.toString())
    console.log(pubu.toString())
}

 main()
