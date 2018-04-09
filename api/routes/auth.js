 
const express = require('express')
const bodyParser = require('body-parser');
const passport = require('passport')

const router = express.Router()
router.use(bodyParser.urlencoded({
    extended: true
}));

const db = require('./../../db')




router.post('/studentAuth',  passport.authenticate('local.one', { failureRedirect: '/login' }), (req, res,next) => {
  res.render('../views/studentDashboard', {username:req.user});

})
router.post('/adminAuth',  passport.authenticate('local.two', { failureRedirect: '/login' }), (req, res,next) => {
  res.render('../views/studentDashboard', {username:req.user});

})
router.post('/teacherAuth',  passport.authenticate('local.three', { failureRedirect: '/login' }), (req, res,next) => {
  res.render('../views/studentDashboard', {username:req.user});

})


router.get('/logout',(req,res)=> {
  req.logout();
  req.session.destroy();
  res.render('../views/index s');

})

passport.serializeUser(function(user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
 console.log("usersdsdd"+user_id);

    done(null, user_id);

});

function authenticationMiddleware () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated()) return next();
	    res.redirect('/login')
	}
}

exports=module.exports = router


/*
// router.post('/teacherAuth', (req, res,next) => {
   
//     var username=req.body.username;
//     var password=req.body.password;
//  //   var id = parseInt(req.body.id);
//      var sql = `select id from teacher_auth where username=? and password=?;`;
    
//     db.query(sql,[username,password], function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is: ', results);
//       if(results[0]==null)
//       {
//         res.redirect('/teacherLogin')
//          // res.send(null)
//       }
//       else{
//         res.render('../views/teacherDashboard', {username:username});
      
//       }
//     })
    
// })

// router.post('/studentAuth', (req, res,next) => {
   
//   //  console.log('hello nigga');
    
//     var username=req.body.username;
//     var password=req.body.password;
//       console.log(username+' '+password);
//  //   var id = parseInt(req.body.id);
//      var sql = `select id from student_auth where username=? and password=?;`;
    
//     db.query(sql,[username,password], function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is: ', results);
//       if(results[0]==null)
//       {
//          res.redirect(301, '');
//          // username and pass not found flash 
//       }
//       else{
//         res.render('../views/dashboard', {username:username, password:password});
//        // res.render('../views/index s');
//       }
//     })
    
// })


// router.post('/adminAuth', (req, res,next) => {

//     var username=req.body.username;
//     var password=req.body.password;
//  //   var id = parseInt(req.body.id);
//      var sql = `select id from admin_auth where username=? and password=?;`;
    
//     db.query(sql,[username,password], function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is: ', results);
//       if(results[0]==null)
//       {
//           res.send(null)
//       }
//       else{

//         res.send(results[0])
//       }
//     })
    
// })


*/