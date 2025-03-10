const { heroLevel } = require('./index');

describe('heroLevel', () => {
	let expect;

	before(async () => {
		const chai = await import('chai');
		expect = chai.expect;
	});

	it('should return "Ferro" for XP less than 1001', () => {
		expect(heroLevel('Hero1', 1000)).to.equal('O herói Hero1 está no nível Ferro');
	});

	it('should return "Bronze" for XP between 1001 and 2000', () => {
		expect(heroLevel('Hero2', 1500)).to.equal('O herói Hero2 está no nível Bronze');
	});

	it('should return "Prata" for XP between 2001 and 5000', () => {
		expect(heroLevel('Hero3', 3000)).to.equal('O herói Hero3 está no nível Prata');
	});

	it('should return "Ouro" for XP between 5001 and 7000', () => {
		expect(heroLevel('Hero4', 6000)).to.equal('O herói Hero4 está no nível Ouro');
	});

	it('should return "Platina" for XP between 7001 and 8000', () => {
		expect(heroLevel('Hero5', 7500)).to.equal('O herói Hero5 está no nível Platina');
	});

	it('should return "Ascendente" for XP between 8001 and 9000', () => {
		expect(heroLevel('Hero6', 8500)).to.equal('O herói Hero6 está no nível Ascendente');
	});

	it('should return "Imortal" for XP between 9001 and 10000', () => {
		expect(heroLevel('Hero7', 9500)).to.equal('O herói Hero7 está no nível Imortal');
	});

	it('should return "Radiante" for XP greater than 10000', () => {
		expect(heroLevel('Hero8', 11000)).to.equal('O herói Hero8 está no nível Radiante');
	});
});
