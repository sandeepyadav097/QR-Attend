const express = require('express')
const router = express.Router()
const db = require('./../../db')

router.post('/markAttendance', (req, res,next) => {
   
            
            var sid = parseInt(req.user);
            var date= req.body.date;
            var otp=req.body.otp;
            var subject=req.body.subject;
            
            var Class="";

            var sql11='select class from student_details where student_id=?'
        db.query(sql11,[sid], function (error, results, fields) {
        
        if (error) throw error;
        console.log('The solution is: ', results);
        Class=results[0].class;       
        //res.send({success:true})    
        var sql21 = 'select * from  attendance'+Class+' where student_id=? and attendance_date=?;'
        db.query(sql21,[sid,date], function (error, results, fields) {
                    if (error) throw error;
        console.log('The solution is: ', results);
        if((results[0]==null))
        {
            var sql211 = 'insert into  attendance'+Class+'(student_id,attendance_date) values(?,?);'
            db.query(sql211,[sid,date], function (error, results, fields) {
                        if (error) throw error;
            console.log('The solution is: ', results);
        })
        }


        console.log(Class+" "+date+" "+otp);

            var sql = `select * from otp where class=? and attendance_date=? and otpc=? and complete=0`;
            // var sql1=`select * from otp where teacher_id=1 and attendance_date='23/3/2018' and otpc='1234' and complete=0`;
            // console.log(tid+" "+sid+" "+date+" "+otp+" "+subject);
            var check=false;

            db.query(sql,[Class,date,otp], function (error, results, fields) {
                check=false;
            if (error) throw error;
            console.log('The solution is hhhhhhh: ', results);
            if(!(results[0]==null))
            {
                check=true;
            }
            
            if(check)
            {
                nextQuery(check);
                res.send({success:true})
            }
            
            else
            res.send({success:false})
            
            })
            console.log("dsdsdsdsd"+ check);
        function nextQuery(check)
        {
            if(check)
            {
                var Class="";

                    var sql1='select class from student_details where student_id=?'
                db.query(sql1,[sid], function (error, results, fields) {
                
                if (error) throw error;
                console.log('The solution is: ', results);
                Class=results[0].class;       
                //res.send({success:true})    
                var sql2 = 'update attendance'+Class+' set '+subject+'= ? where student_id=? and attendance_date=?;'
                db.query(sql2,['P',sid,date], function (error, results, fields) {
                            if (error) throw error;
                console.log('The solution is: ', results);
            
            })
                
                })


                
        }

        }
       

        })
        
        })




})



exports=module.exports = router