const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    const heroName        = await pergunta("Digite o nome do herói: ");
    const numeroVitorias  = await pergunta("Digite o número de vitórias do herói: ");
    const numeroDerrotas  = await pergunta("Digite o número de derrotas do herói: ");
    // Fechamos a interface só depois da última resposta
    rl.close();

    return {
        heroName,
        numeroVitorias: parseInt(numeroVitorias, 10),
        numeroDerrotas: parseInt(numeroDerrotas, 10)
    };
}

function heroLevel(saldoVitoria) {
    let nivel = "";

    if (saldoVitoria <= 10)       nivel = "Ferro";
    else if (saldoVitoria <= 20)  nivel = "Bronze";
    else if (saldoVitoria <= 50)  nivel = "Prata";
    else if (saldoVitoria <= 80)  nivel = "Ouro";
    else if (saldoVitoria <= 90)  nivel = "Diamante";
    else if (saldoVitoria <= 100) nivel = "Lendário";
    else                          nivel = "Imortal";

    return nivel;
}

// Função principal
(async () => {
    // 1) Recebe os dados do herói
    const dadosHero = await entradaDados();

    // 2) Calcula o saldo de vitórias
    const saldoVitorias = dadosHero.numeroVitorias - dadosHero.numeroDerrotas;

    // 3) Preenche o objeto final
    const hero = {
        heroName:       dadosHero.heroName,
        numeroVitorias: dadosHero.numeroVitorias,
        numeroDerrotas: dadosHero.numeroDerrotas,
        saldoVitorias,
        nivel:          heroLevel(saldoVitorias)
    };

    // 4) Exibe resultado
    console.log(
    `O herói ${hero.heroName} tem saldo de ${hero.saldoVitorias} vitórias ` +
    `e está no nível de ${hero.nivel}.`
    );
})();