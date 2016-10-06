module.exports = (app)=>{
	const Codigo = app.models.codigo;
	const codigoCtrl = {
		validarCodigo: (req,res)=>{
			const codigo = '41gu3mt44qu1';
			if(codigo == req.body.codigo){
				Codigo.findOne({nome: req.body.nome}, (err,codigo)=>{
					if(!codigo){
						let codigo 		= new Codigo;
						codigo.nome 	= req.body.nome;
						codigo.codigo 	= req.body.codigo;
						codigo.save((err,c)=>{
							res.redirect('/ui')
						})
					}else{
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