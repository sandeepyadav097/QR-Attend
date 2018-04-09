
const express = require('express')
const bodyParser = require('body-parser');

const router = express.Router()
router.use(bodyParser.urlencoded({
    extended: true
}));

const db = require('./../../db')

var app=express();



router.post('/teacherAuth', (req, res,next) => {
   
    var username=req.body.username;
    var password=req.body.password;
 //   var id = parseInt(req.body.id);
     var sql = `select id from teacher_auth where username=? and password=?;`;
    
    db.query(sql,[username,password], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
        res.redirect('/teacherLogin')
         // res.send(null)
      }
      else{
        res.render('../views/teacherDashboard', {username:username});
      
      }
    })
    
})

router.post('/studentAuth', (req, res,next) => {
   
  //  console.log('hello nigga');
    
    var username=req.body.username;
    var password=req.body.password;
      console.log(username+' '+password);
 //   var id = parseInt(req.body.id);
     var sql = `select id from student_auth where username=? and password=?;`;
    
    db.query(sql,[username,password], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
         res.redirect(301, '');
         // username and pass not found flash 
      }
      else{
        //res.render('../views/dashboard', {username:username, password:password});
        res.render('../views/studentDashboard', {username:username});
      }
    })
    
})

router.post('/adminAuth', (req, res,next) => {

    var username=req.body.username;
    var password=req.body.password;
 //   var id = parseInt(req.body.id);
     var sql = `select id from admin_auth where username=? and password=?;`;
    
    db.query(sql,[username,password], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
          res.send(null)
      }
      else{

        res.send(results[0])
      }
    })
    
})
exports=module.exports = router