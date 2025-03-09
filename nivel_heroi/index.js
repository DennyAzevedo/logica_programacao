const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question("Digite o nome do heroi: ", (answer) => {
	const heroName = answer
	rl.close()
})

rl.question("Digite o valor de XP do herói: ", (answer) => {
	const heroXP = answer
	rl.close()
})

