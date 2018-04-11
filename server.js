const express = require('express')
const path = require('path')
const db = require('./db');
const admin = require('./api/routes/admin')
const teacher=require('./api/routes/teacher')
const student=require('./api/routes/student')
const auth=require('./api/routes/auth')
const detailsSelect=require('./api/routes/detailsSelect')
const query=require('./api/routes/query')
const morgan = require('morgan')
const app = express();
const bodyParser=require('body-parser');
app.set("view engine", "ejs");
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);



app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
db.connect();

var options = {
  host     : 'localhost',
  user     : 'root',
  database : 'dbms_project'
};


var sessionStore = new MySQLStore(options);

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  store: sessionStore,
  saveUninitialized: false
 // cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

var  myLocalStrategy1=new LocalStrategy(
  function(username, password, done) {

    var sql = `select id from student_auth where username=? and password=?;`;

    db.query(sql,[username,password], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
        return done(null,false);
         // username and pass not found flash 
      }
      else{
        //res.render('../views/dashboard', {username:username, password:password});
        return done(null,results[0].id);
      }
    })

     
 
  }
);

var  myLocalStrategy2=new LocalStrategy(
  function(username, password, done) {

    var sql = `select id from admin_auth where username=? and password=?;`;

    db.query(sql,[username,password], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
        return done(null,false);
         // username and pass not found flash 
      }
      else{
        //res.render('../views/dashboard', {username:username, password:password});
        return done(null,results[0].id);
      }
    })

     
 
  }
);
var  myLocalStrategy3=new LocalStrategy(
  function(username, password, done) {

    var sql = `select id from teacher_auth where username=? and password=?;`;

    db.query(sql,[username,password], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
        return done(null,false);
         // username and pass not found flash 
      }
      else{
        //res.render('../views/dashboard', {username:username, password:password});
        return done(null,results[0].id);
      }
    })

     
 
  }
);
passport.use('local.one', myLocalStrategy1);
passport.use('local.two', myLocalStrategy2);
passport.use('local.three', myLocalStrategy3);


app.get('/hello', function(req,res){
  res.render("admin");
});

app.get('/studentProfile',authenticationMiddleware1 (),(req,res)=>{    
  var sql = 'select * from student_details where student_id=?;';
    
  db.query(sql,[req.user], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    if(results[0]==null)
    {
        res.send(null);
    }
    else{
      res.render('../views/studentDashboard',{username:results[0].student_name, s1:'' , s2:'', s3:'', s4:'', s5:'',
    t1:'', t2:'', t3:'', t4:'', t5:'', p1:'', p2:'', p3:'', p4:'', p5:'', a1:'', a2:'', a3:'', a4:'', a5:'',
        
    per1:'', per2:'', per3:'', per4:'', per5:''
    
    }) 
    
        
    }
 
  })
})

app.get('/teacherProfile',authenticationMiddleware2 (),(req,res)=>{    
  var sql = 'select * from teacher_details where teacher_id=?;';
    
  db.query(sql,[req.user], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    if(results[0]==null)
    {
        res.send(null);
    }
    else{
      res.render('../views/teacherDashboard', {username:results[0].teacher_name});
        
    }
 
  })
})

app.get('/studentlogin', (req, res)=>{
      res.render('studentLogin');
});

app.get('/teacherlogin', (req, res)=>{
      res.render('teacherLogin');
});
app.get('/adminlogin', (req, res)=>{
  res.render('adminLogin');
});

app.get('/index', (req,res)=>{
res.render('index');

});

app.get('/views/admin', (req, res)=>{
  res.render('admin');
  
  });


  function authenticationMiddleware1 () {  
    return (req, res, next) => {
      console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
  
        if (req.isAuthenticated()) return next();
        res.redirect('/studentLogin')
    }
  }
  
  function authenticationMiddleware2 () {  
    return (req, res, next) => {
      console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
  
        if (req.isAuthenticated()) return next();
        res.redirect('/teacherLogin')
    }
  }
  

app.use('/api/routes/admin',admin);
app.use('/api/routes/teacher',teacher);
app.use('/api/routes/student',student);
app.use('/api/routes/auth',auth);
app.use('/api/routes/detailsSelect',detailsSelect);
app.use('/api/routes/query',query);

app.listen(3830, () => console.log('Server started at http://localhost:3070'))
///
