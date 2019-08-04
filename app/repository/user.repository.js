const pool = require('../db/config');

exports.createUser = (userDetails) =>{
   console.log('userDetails', userDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblUserDetails SET ?', userDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create user', query.sql)
     })
      }); 
      
    }
    
    
exports.updateUser = (userDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblUserDetails SET  ? WHERE idUser = :idUser', userDetails, (error, results, fields) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
        console.log('update user', query.sql)
        
     })
      }); 
 }
    
 exports.getAllUsers = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblUserDetails' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       


 

 exports.getAllUsersTypes = () =>{
  
   return new Promise((resolve, reject) =>{
      setTimeout(() => {
          pool.query('SELECT * FROM tbltesttypes' , (error, result) => {
              
        if (error) {
          reject('Opps!. Something went wrong');
        } else {
          resolve(results);
        }
      }, 2000);
   })
    }); 
}     