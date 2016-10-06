const  express          = require('express')
,      path             = require('path')
,      favicon          = require('serve-favicon')
,      logger           = require('morgan')
,      cookieParser     = require('cookie-parser')
,      bodyParser       = require('body-parser')
,      compression      = require('compression')
,      expressSession   = require('express-session')
,      passport         = require('passport')
,      cors             = require('cors')
,      passportHttp     = require('passport-http')
,      passportLocal    = require('passport-local')
,      flash            = require('express-flash')
,      load             = require('express-load')
,      app              = express();



// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
// app.use(helmet());
app.use(flash());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(cookieParser('iY}ONxQ,Y9I^Z}&y6-i}~35cS/vk/sf8+y@8c.2></>P*Z03Xhue?lzY%|dzN>S'));
app.use(expressSession({
  secret: process.env.SESSION_SECRET || '1a5H(qzO&1+!8M35tXvai3A*JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85',
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy({
  usernameField: 'login',
  passwordField: 'senha',
},verificaLogin));
passport.use(new passportHttp.BasicStrategy(verificaLogin));

function verificaLogin(username, password, done){
  var pass = require('./app/middleware/password');
  var User = app.models.user;
  User.findOne({'login': username }, function (err, result) {
    if(err) { console.log("ERROR: " + err); }
    else {
      if(result){
        if(result.login == username && pass.validate(result.password, password) && result.status == false) {
          done(null, result);
        } else {
          done(null, null);
        }
      } else {

        done(null, null);
      }
    }
  });
}


passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
  done(null, user);
});

load('models',{cwd: 'app'})
.then('middleware')
.then('controllers')
.then('routes')
.then('config')
.into(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.redirect('/');
    // res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.redirect('/');
  // res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
});


module.exports = app;
