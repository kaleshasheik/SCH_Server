const pool = require('../db/config');

exports.addStaff = (staffDetails) =>{
   console.log('staffDetails', staffDetails)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
           var query =  pool.query('INSERT INTO tblstaffdetails SET ?', staffDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000)
     console.log('create staff', query.sql)
     })
      }); 
      
    }
    
    
exports.updateStaff = (staffDetails) =>{
        
              
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         var query=   pool.query('UPDATE tblstaffdetails SET  ? WHERE idStaff = :idStaff', staffDetails, (error, results, fields) => {
                
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
    
 exports.getAllStaffUsers = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblstaffdetails' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }       


