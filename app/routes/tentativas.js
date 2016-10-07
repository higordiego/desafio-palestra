module.exports = (app)=>{
	let tentativas = app.controllers.tentativas
	,   autenticar 	= require('../middleware/autenticador');
	app.get('/tentativa', tentativas.listar);
	app.get('/dicabatata', tentativas.dica);
	app.post('/dicabatata', tentativas.dicabatata);
	app.get('/curso', tentativas.curso);
}