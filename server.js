const express = require('express')
const path = require('path')
const db = require('./db');
const admin = require('./api/routes/admin')
const teacher=require('./api/routes/teacher')
const student=require('./api/routes/student')
const morgan = require('morgan')
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
db.connect();

app.get('/',(req,res)=>{    
    db.query('SELECT 1 + 1 from dual', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    })   
   
})
app.use('/api/routes/admin',admin);
app.use('/api/routes/teacher',teacher);
app.use('/api/routes/student',student)


app.listen(2678, () => console.log('Server started at http://localhost:2678'))
///