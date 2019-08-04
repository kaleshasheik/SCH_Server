const pool = require('../db/config');

exports.addStudentPersonalDetails = (studentDetails, userParentId) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('INSERT INTO tblstudentpersoneldetails SET ?', [studentDetails,{idUser:userParentId}], (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }

exports.addPreAdmissionDetails = (preAdmissionDetails) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('INSERT INTO tblstudentpreadmissiondetails SET ?', preAdmissionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }    
    
exports.addPreInstitutionDetails = (preInstitutionDetails) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('INSERT INTO tblpreviousinstitutiondetails SET ?', preInstitutionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }  

exports.addAdmissionDetails = (admissionDetails) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('INSERT INTO tblstudentadmissiondetails SET ?', admissionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }      

 exports.getAllStudents = () =>{
    
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            pool.query('SELECT * FROM tblstudentpersoneldetails' , (error, result) => {
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
 }      



 exports.editStudentPersonalDetails = (studentDetails, userParentId) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('UPDATE tblstudentpersoneldetails SET ? WHERE idStudent = :idStudent', [studentDetails,{idUser:userParentId}], (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }

exports.editPreAdmissionDetails = (preAdmissionDetails) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('UPDATE tblstudentpreadmissiondetails SET ? WHERE idStudent = :idStudent', preAdmissionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }    
    
exports.editPreInstitutionDetails = (preInstitutionDetails) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('UPDATE tblpreviousinstitutiondetails SET ? WHERE idStudent = :idStudent', preInstitutionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }  

exports.editAdmissionDetails = (admissionDetails) =>{
  
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            pool.query('UPDATE tblstudentadmissiondetails SET ? WHERE idStudent = :idStudent', admissionDetails, (error, results, fields) => {    
                
          if (error) {
            reject('Opps!. Something went wrong');
          } else {
            resolve(results);
          }
        }, 2000);
     })
      }); 
      
    }      

