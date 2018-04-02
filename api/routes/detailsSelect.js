const express = require('express')
const router = express.Router()
const db = require('./../../db')



router.get('/Class',(req,res)=> {
   
    var sql = `select * from classes`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      
    if(results[0]==null)
    {
        res.send(null);
    }
    else{
        res.send(results);
    }
    })

})

router.get('/studentDetails',(req,res) => {
   
 
     var sql = `select * from student_details;`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
          res.send(null);
      }
      else{
          res.send(results);
      }
   
    })

  
})
router.get('/teacherDetails', (req,res) => {
   
    
     var sql = `select * from teacher_details;`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
    {
        res.send(null);
    }
    else{
        res.send(results);
    }
    })
})
router.get('/subjectCodes',(req,res) => {
   
 
     var sql = `select * from subject_codes`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
          res.send(null);
      }
      else{
          res.send(results);
      }
    })
})
router.get('/subjectTeacherClass', (req,res)=> {

     var sql = `select * from subject_teacher_class;`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);

      if(results[0]==null)
      {
          res.send(null);
      }
      else{
          res.send(results);
      }
    })
})
router.get('/teacherTimeTable', (req,res) => {
   

     var sql = `select * from teacher_time_table`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);

      if(results[0]==null)
      {
          res.send(null);
      }
      else{
          res.send(results);
      }
    })
})
router.get('/studentAuth', (req,res) => {
   

     var sql = `select * from student_auth ;`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
          res.send(null);
      }
      else{
          res.send(results);
      }
    })
})
router.get('/teacherAuth', (req,res) => {
 
     var sql = `select * from teacher_auth ;`;
    
    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      if(results[0]==null)
      {
          res.send(null);
      }
      else{
          res.send(results);
      }
    })
  
   
})


exports=module.exports = router