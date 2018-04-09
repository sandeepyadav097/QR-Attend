const express = require('express')
const router = express.Router()
const db = require('./../../db')
var classTaken="";
var subjectTaken="";

router.post('/takeAttendance', (req, res,next) => {
   
    var id = parseInt(req.user);
    var date= req.body.date;
    var otp=req.body.otp;
    var Class=req.body.class;
    subjectTaken=req.body.subject;

    classTaken=Class;

    var complete=0;

     var sql = `insert into otp values(?,?,?,?,?);`;
    
    db.query(sql,[id,date,complete,otp,Class], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      res.send({success:true})
    })
})

router.post('/stopAttendance', (req, res,next) => {
   
    var id = parseInt(req.user);
    var date= req.body.date;
 
    var complete=1;

     var sql = `update otp set complete=? where teacher_id=? and attendance_date=?`;
    
    db.query(sql,[complete,id,date], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      res.send({success:true})

      var sql2 = 'update attendance'+classTaken+' set '+subject+'= ? where ' +subjectTaken+'= ? attendance_date=?;'
      db.query(sql2,['A','N',date], function (error, results, fields) {
                  if (error) throw error;
      console.log('The solution is: ', results);
  
  })
    })

    
})

exports=module.exports = router