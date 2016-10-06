module.exports = (app)=>{
	var login 		= app.controllers.login
	,   autenticar 	= require('../middleware/autenticador')
	,   passport 	= require('passport');

	app.get('/', 			login.validar);
	app.get('/ui', 			login.index);
	app.get('/loginfail', 	login.loginError);
	app.get('/logout', 		autenticar.loginSistema, login.logout);
	app.post('/login', 		passport.authenticate('local', { failureRedirect: 'loginfail'}), login.logar);
	app.get('/cadastrar', 	login.listar); 
	app.post('/cadastrar', 	login.cadastrar); 

}