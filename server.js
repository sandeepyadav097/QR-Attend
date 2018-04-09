const express = require('express')
const path = require('path')
const db = require('./db');
const admin = require('./api/routes/admin')
const teacher=require('./api/routes/teacher')
const student=require('./api/routes/student')
const auth=require('./api/routes/auth')
const detailsSelect=require('./api/routes/detailsSelect')
const morgan = require('morgan')
const app = express();
const bodyParser=require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
db.connect();


app.get('/hello', function(req,res){
  res.render("admin");
});

app.get('/',(req,res)=>{    
    // db.query('SELECT 1 + 1 from dual', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log('The solution is: ', results);
    // })   
    res.render('login');
})

app.get('/login', (req, res)=>{
      res.render('login');
});


app.get('/views/admin', (req, res)=>{
  res.render('admin');
  
  });

app.use('/api/routes/admin',admin);
app.use('/api/routes/teacher',teacher);
app.use('/api/routes/student',student);
app.use('/api/routes/auth',auth);
app.use('/api/routes/detailsSelect',detailsSelect);

app.listen(3000, () => console.log('Server started at http://localhost:3000'))
///
