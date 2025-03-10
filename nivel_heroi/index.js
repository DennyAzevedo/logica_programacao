const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

function entradaDados() {
	rl.question("Digite o nome do heroi: ", (answer) => {
		const heroName = answer
		rl.close()
	})

	rl.question("Digite o valor de XP do herói: ", (answer) => {
		const heroXP = answer
		rl.close()
	})

	return hero[heroName, heroXP]
}

function heroLevel(heroName, heroXP) {
	let heroLevel = ""

	if (heroXP < 1001) {
		heroLevel = "Ferro"
	} else if (heroXP < 2001) {
		heroLevel = "Bronze"
	} else if (heroXP < 5001) {
		heroLevel = "Prata"
	} else if (heroXP < 7001) {
		heroLevel = "Ouro"
	} else if (heroXP < 8001) {
		heroLevel = "Platina"
	} else if (heroXP < 9001) {
		heroLevel = "Ascendente"
	} else if (heroXP < 10001) {
		heroLevel = "Imortal"
	} else {
		heroLevel = "Radiante"
	}

	return `O herói ${heroName} está no nível ${heroLevel}`
}

//const hero = entradaDados()
//console.log(heroLevel(hero[0], hero[1]))

// Export the function for testing
module.exports = { heroLevel };

// Testando a função
// $ node index.js

