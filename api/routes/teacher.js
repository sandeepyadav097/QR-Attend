const express = require('express')
const router = express.Router()
const db = require('./../../db')

router.post('/takeAttendance', (req, res,next) => {
   
    var id = parseInt(req.body.id);
    var date= req.body.date;
    var otp=req.body.otp;
    var complete=0;

     var sql = `insert into otp values(?,?,?,?);`;
    
    db.query(sql,[id,date,complete,otp], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      res.send({success:true})
    })
})

router.post('/stopAttendance', (req, res,next) => {
   
    var id = parseInt(req.body.id);
    var date= req.body.date;
 
    var complete=1;

     var sql = `update otp set complete=? where teacher_id=? and attendance_date=?`;
    
    db.query(sql,[complete,id,date], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      res.send({success:true})
    })
})

exports=module.exports = router