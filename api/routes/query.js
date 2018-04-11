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
                   finalAns.subp1=results.length;
            
                   var sql2 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject2+' = ? and student_id ='+sid+';'
               
                   db.query(sql2,['P'], function (error, results, fields) {
                     if (error) throw error;
                     console.log('The solution is: ', results);
                     console.log(results.length);
                     finalAns.subp2=results.length;
            
                     var sql3 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject3+' = ? and student_id ='+sid+';'
               
                     db.query(sql3,['P'], function (error, results, fields) {
                       if (error) throw error;
                       console.log('The solution is: ', results);
                       console.log(results.length);
                       finalAns.subp3=results.length;
            
                       var sql4 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject4+' = ? and student_id ='+sid+';'
               
                       db.query(sql4,['P'], function (error, results, fields) {
                         if (error) throw error;
                         console.log('The solution is: ', results);
                         console.log(results.length);
                         finalAns.subp4=results.length;
            
                         var sql5 = 'select distinct attendance_date  from  attendance'+Class+' where '+subject5+' = ? and student_id ='+sid+';'
               
                         db.query(sql5,['P'], function (error, results, fields) {
                           if (error) throw error;
                           console.log('The solution is: ', results);
                           console.log(results.length);
                           finalAns.subp5=results.length;

                           finalAns.suba1=finalAns.sub1-finalAns.subp1;
                           finalAns.suba2=finalAns.sub2-finalAns.subp2;
                           finalAns.suba3=finalAns.sub3-finalAns.subp3;
                           finalAns.suba4=finalAns.sub4-finalAns.subp4;
                           finalAns.suba5=finalAns.sub5-finalAns.subp5;
                          
            finalAns.subper1=(finalAns.subp1/finalAns.sub1)*100;               
            finalAns.subper2=(finalAns.subp2/finalAns.sub2)*100;               
            finalAns.subper3=(finalAns.subp3/finalAns.sub3)*100;               
            finalAns.subper4=(finalAns.subp4/finalAns.sub4)*100;               
            finalAns.subper5=(finalAns.subp5/finalAns.sub5)*100;               
            

if(finalAns.sub1==0)
{
  finalAns.subper1=0;
}

if(finalAns.sub2==0)
{
  finalAns.subper2=0;
}

if(finalAns.sub3==0)
{
  finalAns.subper3=0;
}

if(finalAns.sub4==0)
{
  finalAns.subper4=0;
}

if(finalAns.sub5==0)
{
  finalAns.subper5=0;
}
  var sql = 'select * from student_details where student_id=?;';
    
  db.query(sql,[req.user], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    if(results[0]==null)
    {
        res.send(null);
    }
    else{
      finalAns.username=results[0].student_name;
      res.render('../views/studentDashboard', {username:finalAns.username, s1:subject1, s2:subject2, s3:subject3, s4:subject4, s5:subject5, t1:finalAns.sub1, t2:finalAns.sub2, t3:finalAns.sub3,
        t4:finalAns.sub4,t5:finalAns.sub5, p1:finalAns.subp1, p2:finalAns.subp2, p3:finalAns.subp3 , p4:finalAns.subp4 ,p5:finalAns.subp5, a1:finalAns.suba1,
        a2:finalAns.suba2 , a3:finalAns.suba3, a4:finalAns.suba4, a5:finalAns.suba5, per1:finalAns.subper1, per2:finalAns.subper2,per3:finalAns.subper3,per4:finalAns.subper4,per5:finalAns.subper5  
            
       
       });
      //  res.send(finalAns);
    }
 
  })
                           /* {username:finalAns.username, s1:subject1, s2:subject2, s3:subject3, s4:subject4, s5:subject5, t1:finalAns.sub1, t2:finalAns.sub2, t3:finalAns.sub3,
         t4:finalAns.sub4,t5:finalAns.sub5, p1:finalAns.subp1, p2:finalAns.subp2, p3:finalAns.subp3 , p4:finalAns.subp4 ,p5:finalAns.subp5, a1:finalAns.a1,
         a2:finalAns.a2 , a3:finalAns.a3, a4:finalAns.a4, a5:finalAns.a5, per1:finalAns.subper1, per2:finalAns.subper2,per3:finalAns.subper3,per4:finalAns.subper4,per5:finalAns.subper5  
             
        
        }*/
            
                       })
                    
            
            
                     })
            
            
                   })
            
            
            
            
                 })
                   
            
               })
            })
            
            
            
               })
            









               

           })
        


         })


       })




     })
       

   })
})



   })

   

})




exports=module.exports = router