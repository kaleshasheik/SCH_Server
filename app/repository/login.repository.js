const pool = require('../db/config');

exports.login = (userDetails) =>{
   console.log('login', userDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('SELECT * INTO tblUserDetails WHERE emailId = ? and password = ?', userDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('login user', query.sql)
     })
      }); 
      
    }
    