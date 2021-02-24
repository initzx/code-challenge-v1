/*
DEPRECATED CODE
 */

class Color {
	constructor(name) {
		this.name = name
	}
}

class Green extends Color {
	constructor() {
		super('green');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}

class Red extends Color {
  constructor() {
    super('red');
  }
}

class White extends Color {
	constructor() {
		super('white');
	}
}

class Black extends Color {
	constructor() {
		super('black');
	}
}

function colorFactory(color) {
	switch (color) {
		case 'RED':
			return Red
		case 'BLUE':
			return Blue
		default:
			return null
	}
}

module.exports = { Green, Blue, Red, White, Black};
