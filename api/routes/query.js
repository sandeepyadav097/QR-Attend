const express = require('express')
const router = express.Router()
const db = require('./../../db')

var A=function(){
    console.log("finaladddddns"+finalAns.sub1);
}


router.post('/totalClasses', (req, res,next) => {

    var finalAns={};

   
    var sid = parseInt(req.user);
   // var date= req.body.date;
   // var otp=req.body.otp;
   var sql11='select class from student_details where student_id=?'
   db.query(sql11,[sid], function (error, results, fields) {
   
   if (error) throw error;
   console.log('The solution is: ', results);
   Class=results[0].class;   
   
   
   var sql = `select * from classes where class=?;`;
console.log("classasas"+Class);

   db.query(sql,[Class], function (error, results, fields) {
     if (error) throw error;
     console.log('The solution is: ', results);

     var subject1=results[0].subject1;
     var subject2=results[0].subject2;
     var subject3=results[0].subject3;
     var subject4=results[0].subject4;
     var subject5=results[0].subject5;

console.log("subjects"+subject1+subject2+subject3);

var sql1 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject1+' <> ? ;';
   
     db.query(sql1,['N'], function (error, results, fields) {
       if (error) throw error;
       console.log('The solution is: ', results);
       console.log(results.length);
       finalAns.sub1=results.length;

       var sql2 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject2+' <> ? ;';
   
       db.query(sql2,['N'], function (error, results, fields) {
         if (error) throw error;
         console.log('The solution is: ', results);
         console.log(results.length);
         finalAns.sub2=results.length;

         var sql3 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject3+' <> ? ;';
   
         db.query(sql3,['N'], function (error, results, fields) {
           if (error) throw error;
           console.log('The solution is: ', results);
           console.log(results.length);
           finalAns.sub3=results.length;

           var sql4 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject4+' <> ? ;';
   
           db.query(sql4,['N'], function (error, results, fields) {
             if (error) throw error;
             console.log('The solution is: ', results);
             console.log(results.length);
             finalAns.sub4=results.length;

             var sql5 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject5+' <> ? ;';
   
             db.query(sql5,['N'], function (error, results, fields) {
               if (error) throw error;
               console.log('The solution is: ', results);
               console.log(results.length);
               finalAns.sub5=results.length;
res.send(finalAns);
               

           })
        


         })


       })




     })
       

   })
})



   })

   

})



router.post('/totalStudentClasses', (req, res,next) => {

    var finalAns={};

   
    var sid = parseInt(req.user);
   // var date= req.body.date;
   // var otp=req.body.otp;
   var sql11='select class from student_details where student_id=?'
   db.query(sql11,[sid], function (error, results, fields) {
   
   if (error) throw error;
   console.log('The solution is: ', results);
   Class=results[0].class;   
   
   
   var sql = `select * from classes where class=?;`;
console.log("classasas"+Class);

   db.query(sql,[Class], function (error, results, fields) {
     if (error) throw error;
     console.log('The solution is: ', results);

     var subject1=results[0].subject1;
     var subject2=results[0].subject2;
     var subject3=results[0].subject3;
     var subject4=results[0].subject4;
     var subject5=results[0].subject5;

console.log("subjects"+subject1+subject2+subject3);

var sql1 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject1+' = ? and student_id ='+sid+';'
   
     db.query(sql1,['P',sid], function (error, results, fields) {
       if (error) throw error;
       console.log('The solution is: ', results);
       console.log(results.length);
       finalAns.sub1=results.length;

       var sql2 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject2+' <> ? and student_id ='+sid+';'
   
       db.query(sql2,['N'], function (error, results, fields) {
         if (error) throw error;
         console.log('The solution is: ', results);
         console.log(results.length);
         finalAns.sub2=results.length;

         var sql3 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject3+' <> ? and student_id ='+sid+';'
   
         db.query(sql3,['N'], function (error, results, fields) {
           if (error) throw error;
           console.log('The solution is: ', results);
           console.log(results.length);
           finalAns.sub3=results.length;

           var sql4 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject4+' <> ? and student_id ='+sid+';'
   
           db.query(sql4,['N'], function (error, results, fields) {
             if (error) throw error;
             console.log('The solution is: ', results);
             console.log(results.length);
             finalAns.sub4=results.length;

             var sql5 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject5+' <> ? and student_id ='+sid+';'
   
             db.query(sql5,['N'], function (error, results, fields) {
               if (error) throw error;
               console.log('The solution is: ', results);
               console.log(results.length);
               finalAns.sub5=results.length;
res.send(finalAns);
               

           })
        


         })


       })




     })
       

   })
})



   })

   

})



exports=module.exports = router