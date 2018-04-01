const express = require('express')
const router = express.Router()
const db = require('./../../db')

router.post('/markAttendance', (req, res,next) => {
   
    var tid=parseInt(req.body.tid);
    var sid = parseInt(req.body.sid);
    var date= req.body.date;
    var otp=req.body.otp;
    var subject=req.body.subject;
    ///var Class=req


     var sql = `select * from otp where teacher_id=? and attendance_date=? and otpc=? and complete=0`;
    // var sql1=`select * from otp where teacher_id=1 and attendance_date='23/3/2018' and otpc='1234' and complete=0`;
    // console.log(tid+" "+sid+" "+date+" "+otp+" "+subject);
    var check=false;

    db.query(sql,[tid,date,otp], function (error, results, fields) {
        check=false;
      if (error) throw error;
      console.log('The solution is: ', results);
      if(!(results[0]==null))
      {
          check=true;
      }
      console.log(check);
      if(check)
      res.send({success:true})
      else
      res.send({success:false})
      
    })

})



exports=module.exports = router