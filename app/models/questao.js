module.exports = (app)=>{
	var mongoose = require('mongoose')
	,	Schema = mongoose.Schema
	

	var questao = new Schema(
		{
			
			anunciado: 		{ type: String, required: true, unique: true},
			
			resposta: 		{ type: String, required: true },
			
			status: 		{ type: Boolean, default: false},
			
		}
	);
	return mongoose.model('Questao', questao);
}
