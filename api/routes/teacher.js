const express = require('express')
const router = express.Router()
const db = require('./../../db')
var classTaken="";
var subjectTaken="";
var dateTaken="";


router.post('/takeAttendance', (req, res,next) => {
   
    var id = parseInt(req.user);
    var date= req.body.date;
    var otp=req.body.otp;
    var Class=req.body.class;

    dateTaken=date;

    subjectTaken=req.body.subject;

    classTaken=Class;

    var complete=0;

     var sql = `insert into otp values(?,?,?,?,?);`;
    
    db.query(sql,[id,date,complete,otp,Class], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
     res.send({success:true})
      tesq();
    })
})
function tesq(){
    console.log(classTaken+" "+subjectTaken);
}
router.post('/stopAttendance', (req, res,next) => {
   
    console.log(classTaken+" "+subjectTaken);
    var id =parseInt(req.user);
  
 
    var complete=1;

     var sql = `update otp set complete=? where teacher_id=? and attendance_date=?`;
    
    db.query(sql,[complete,id,dateTaken], function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    //  res.send({success:true})

      var sql2 = 'update attendance'+classTaken+' set '+subjectTaken+'= ? where ' +subjectTaken+'= ? and attendance_date=?;'
      db.query(sql2,['A','N',dateTaken], function (error, results, fields) {
          console.log(sql2);
                  if (error) throw error;
      console.log('The solution is: ', results);

      res.render('../views/statusTeacher',{success:"Attendance taken succesfully"})

  
  })
    })

    
})

exports=module.exports = router