console.log('staring up')

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

const add2 = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 0)
    })
}




const function3 = async () => {
    const a = await add(2,3)
    console.log(a)
    const b = await add2(a,1)
    console.log(b)
}

function3()

console.log('finishing up')