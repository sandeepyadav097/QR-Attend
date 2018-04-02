const express = require('express')
const router = express.Router()
const db = require('./../../db')

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
          res.send(null)
      }
      else{

        res.send(results[0])
      }
    })
    
})

router.post('/studentAuth', (req, res,next) => {
   
    var username=req.body.username;
    var password=req.body.password;
 //   var id = parseInt(req.body.id);
     var sql = `select id from student_auth where username=? and password=?;`;
    
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