module.exports = (app)=>{
	const Codigo 		= app.models.codigo;
	const Tentativas 	= app.models.tentativas;
	const codigoCtrl 	= {
		validarCodigo: (req,res)=>{
			const codigo = '41gu3mt44qu1';
			if(codigo == req.body.codigo){
				Codigo.findOne({nome: req.body.nome}, (err,codigos)=>{
					if(!codigos){
						
						let codigo 		= new Codigo;
						codigo.nome 	= req.body.nome;
						codigo.codigo 	= req.body.codigo;
						let tentativa =  new Tentativas();
						tentativa.codigo = codigo._id;
						tentativa.tentou = 1;
						tentativa.save();
						codigo.save((err,c)=>{
							res.redirect('/ui')
						})
					}else{
						Tentativas.update({codigo: codigos._id}, {$inc: {tentou: +1 } }, (error,te)=>{
							console.log(error);
							console.log(te);
						})
						res.redirect('/ui')
					}
				});
			}else{
				req.flash('info', true);
				res.redirect('/');
			}
		}
	}
	return codigoCtrl;
}