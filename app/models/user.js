module.exports = function(app){
	var mongoose = require('mongoose')
	,	Schema = mongoose.Schema
	,	pass = require('../middleware/password');

	function configPass (v) {
		return pass.hash(v);
	}

	/*
	Regra de Negócio...
	o tipo qie define qual grupo de usuário pertence

	0 - Master 
	1 - Médico 
	2 - Recepção 
	3 - Usuário 
	*/
	var usuario = new Schema(
		{
			
			login: 		{ type: String, required: true, unique: true},
			// Senha desse Usuário
			password: 	{ type: String, required: true, set: configPass},
			// status 
			status: 	{ type: Boolean, default: false},
			/*
			O ativo caso o login seja bloqueado o status vai está como true, caso contrario false;
			*/
		}
	);
	return mongoose.model('Usuario', usuario);
}
