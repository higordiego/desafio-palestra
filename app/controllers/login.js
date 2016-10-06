module.exports = (app)=>{
	var Usuario 	= app.models.user
	,	Questoes 	= app.models.questao;
	var loginController = {
		index: (req,res)=>{
			Questoes.count().exec((err, count)=>{
				var random = Math.floor(Math.random() * count);
				Questoes.findOne().skip(random).exec(
					(err, result)=> {
						if(result){
							if(req.user){
								res.redirect('/tranquilo')
							}else{
								res.render('index',{
									quest: result.anunciado
								});
							}
						}else{
							if(req.user){
								res.redirect('/')
							}else{
								res.render('index',{
									quest: ''
								});
							}
						}
					});
			});
			
		},
		validar: function(req,res){
			res.render('validar');
		},
		
		loginError: function(req,res){
			req.flash('info', 1);
			res.redirect('/')
		},
		logar: function(req,res){
			res.redirect('/tranquilo');
		},
		logout: function(req,res){
			req.logout();
			res.redirect('/');
		},
		cadastrar: function(req,res){
			var usuario = new Usuario();
			
			
			usuario.login = req.body.login;
			usuario.password = req.body.senha;

			usuario.save(function(err,c){
				res.json(c);
			})
		},
		listar: (req,res)=>{
			Usuario.find((err,usuario)=>{
				res.json(usuario);
			})
		}

	}
	return loginController;
}