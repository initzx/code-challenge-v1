const { getColor } = require('./apiMock');

async function colors() {
	console.log("DEBUG: ", process.argv)
	let hex = process.argv[2]
	let async = process.argv[3]
	const colorOrder = JSON.parse(process.argv[4])

	if (async === 'async') {
		const result = await Promise.all(colorOrder.map(col => new Promise(async resolve => {
			const res = await getColor(col)
			resolve(hex === 'hex' ? res.HEX : res.RGB)
		})))
		console.log(result);
	} else { // Synchronous version
		for (const color of colorOrder) {
			let col = await getColor(color)
			console.log(hex === 'hex' ? col.HEX : col.RGB)
		}
	}
}

colors();

/*
To run application:
node src/index.js rgb async '["green","blue","red"]'
*/
