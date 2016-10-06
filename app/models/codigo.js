module.exports = function(app){
	var mongoose = require('mongoose')
	,	Schema = mongoose.Schema;

	
	var codigo = new Schema(
		{
			
			nome: 		{ type: String, required: true, unique: true},
			// Senha desse Usuário
			codigo: 	{ type: String, required: true},

		}
	);
	return mongoose.model('Codigo', codigo);
}
