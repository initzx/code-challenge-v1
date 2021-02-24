const getColor = async function(colorName) {
    console.log('start')
    await new Promise(resolve => setTimeout(resolve, 500))
    if (colorName === 'black') return { name: 'black', HEX: '#000000', RGB: { R: 0, G: 0, B: 0 }}
    if (colorName === 'white') return { name: 'white', HEX: '#ffffff', RGB: { R: 255, G: 255, B: 255 }}
    if (colorName === 'blue') return { name: 'blue', HEX: '#0000ff', RGB: { R: 0, G: 0, B: 255 }}
    if (colorName === 'green') return { name: 'green', HEX: '#00ff00', RGB: { R: 0, G: 255, B: 0 }}
    if (colorName === 'red') return { name: 'red', HEX: '#ff0000', RGB: { R: 255, G: 0, B: 0 }}
    throw new Error('Unknown color')
}

const colors = ['green', 'red', 'blue']

async function getColors(cols) {
    const promises = cols.map(getColor)
    await new Promise(res => setTimeout(res, 4000))
    // Promise.all(promises).then(res => console.log(res))
    for (const promise of promises) {
        let res = await promise
        console.log(res)
        // let res = promise.then(res => console.log(res)).then(() => console.log(Date.now() - start))
    }
}

async function getColors2(cols) {
    let first = getColor(cols[0])
    let second = getColor(cols[1])
    let third = getColor(cols[2])
    let start = Date.now()
    // first
    //     .then(res => {
    //     console.log(res);
    // })
    // second.then(res => {
    //     console.log(res);
    // })
    console.log(first)
    console.log(await first)
    console.log(await second)
    console.log(Date.now() - start)
}

getColors(colors)