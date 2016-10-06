module.exports = (app)=>{
	const Questao = app.models.questao;
	let quest = {
		cadastrar: (req,res)=>{
			let questao 	  = new Questao();
			questao.anunciado = req.body.anunciado;
			questao.resposta  = req.body.resposta;
			questao.save((err)=>{
				if(!err){
					res.json({msg:true});
				}
			})
		},
		listar: (req,res)=>{
			Questao.find((err,questao)=>{
				res.json(questao);
			})
		}
	}
	
	return quest;
}