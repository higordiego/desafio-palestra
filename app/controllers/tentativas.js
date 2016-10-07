module.exports  = (app)=>{
	const Tentativas = app.models.tentativas;
	const tentativasCtrl = {
		listar: (req,res)=>{
			Tentativas.find({})
			.populate('codigo')
			.exec((err,tentativas)=>{
				res.json(tentativas);
			});
		},
		dica: (req,res)=>{
			res.render('dica');
		},
		dicabatata: (req,res)=>{
			if(req.body.resposta == "naotemresposta"){
				res.redirect('/')
			}else{
				res.json()
			}
		},
		curso: (req,res)=>{
			res.render('curso');
		}
	}
	return tentativasCtrl;
}