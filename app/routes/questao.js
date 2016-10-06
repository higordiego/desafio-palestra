module.exports = (app)=>{
	let questoes = app.controllers.questoes
	,   autenticar 	= require('../middleware/autenticador');
	app.get('/questoes', questoes.listar);
	app.post('/questoes', questoes.cadastrar);
	app.get('/tranquilo', autenticar.loginSistema, questoes.index);
}

// 41gu3mt44qu1

/*
	Devemos lembrar que, ao receber um sorvete, recebemos também um palito. Logo o sorvete “custa” 9 palitos.
	Portanto, um palito vale ________ do preço do sorvete.
	resposta: palito1/9

	Ana Carolina é uma grande fumante, no entanto decidiu parar de fumar. 
	“Acabarei com os vinte e sete cigarros que sobraram!”, e ainda afirmou: “Jamais voltarei a fumar”. 
	Era costume da Ana Carolina fumar exatamente dois terços de cada cigarro. 
	Não tardou muito em descobrir que com a ajuda de uma fita adesiva poderia juntar três tocos de cigarros e fazer outro cigarro. 
	Com 27 cigarros, quantos pode fumar antes de abandonar o fumo para sempre?

	resposta: cigarros40

	Uma mulher vai visitar suas 3 filhas e leva uma cesta de maçãs. 
	Para a primeira, dá a metade das maçãs e mais meia maçã. 
	Para a segunda, dá a metade das maçãs que sobraram e mais meia maçã. 
	Para a terceira, novamente dá a metade das maçãs que sobraram e mais meia maçã, 
	ficando sem nenhuma maçã. Quantas maçãs haviam na cesta?

	resposta: macas7


	João precisa transportar sacos, e para isso ele dispõe de jumentos. 
	Se ele transportar 2 sacos em cada jumento, sobram 13 sacos. 
	Se ele transportar 3 sacos em cada jumento, ficam 3 jumentos desocupados. 
	Qual o número total de sacos que Paulo César deve transportar?

	resposta: jumentos57 


	Em uma estante há 10 livros, cada um com 100 folhas. 
	Uma traça faminta come desde a primeira folha do primeiro livro até a última folha do último livro. 
	Quantas folhas a traça faminta comeu?

	resposta: 802folhas

	Em um grupo de 40 pessoas, qual a probabilidade de pelo menos duas fazerem aniversário no mesmo dia?

	resposta: 89,1%

*/

