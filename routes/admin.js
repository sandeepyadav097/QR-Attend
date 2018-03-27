const express = require('express')
const router = express.Router()
const db = require('./../db')



router.get('/', function (req, res) {
    db.connect();
    
    db.query('SELECT 1 + 1 from dual', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });
})



module.exports = router