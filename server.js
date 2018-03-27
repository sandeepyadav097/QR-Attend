const express = require('express')
const path = require('path')
const db = require('./db');
const admin = require('./routes/admin')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/',(req,res)=>{
  
    db.connect();
    
    db.query('SELECT 1 + 1 from dual', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    })   
   
})
app.use('/admin',admin);
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(2678, () => console.log('Server started at http://localhost:2678'))