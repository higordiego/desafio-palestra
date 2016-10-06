module.exports = (app)=>{
	let codigo = app.controllers.codigo;
	app.post('/validar', 	codigo.validarCodigo);
}