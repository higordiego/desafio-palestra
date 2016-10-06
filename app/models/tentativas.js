module.exports = (app)=>{
	var mongoose = require('mongoose')
	,	Schema = mongoose.Schema
	,	ObjectId = mongoose.Schema.Types.ObjectId;
	

	var tentativas = new Schema(
		{
			
			codigo: 		{ type: ObjectId, ref:"Usuario"},
			
			tentou: 		{ type: Number, required: true }
			
		}
	);
	return mongoose.model('Tentativas', tentativas);
}
