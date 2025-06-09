const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// Função que retorna uma Promise para cada pergunta
function pergunta(promptText) {
    return new Promise(resolve => {
        rl.question(promptText, answer => {
            resolve(answer);
        });
    });
}

// Entrada de dados principal
async function entradaDados() {
    const heroName = await pergunta("Digite o nome do herói: ");
    const heroXP   = await pergunta("Digite o valor de XP do herói: ");
    // Fechamos a interface só depois da última resposta
    rl.close();

    return {
        heroName,
        heroXP : parseInt(heroXP, 10)
    };
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

const hero = entradaDados()
console.log(hero.heroName, hero.heroXP)

// Export the function for testing
module.exports = { heroLevel };

// Testando a função
// $ node index.js
